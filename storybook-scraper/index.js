const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const path = require('path');

class KDSScraper {
  constructor() {
    this.baseUrl = 'https://components.pa.gov';
    this.outputDir = './output';
    this.componentGroups = new Map();
  }

  async init() {
    console.log('🚀 KDS Component Scraper');
    console.log('========================\n');

    // Ensure output directory exists
    await fs.mkdir(this.outputDir, { recursive: true });

    // Fetch component index
    console.log('📋 Fetching component index from', this.baseUrl);
    const index = await this.fetchIndex();
    console.log(`✓ Found ${Object.keys(index).length} entries\n`);

    // Organize components by name
    this.organizeComponents(index);
    console.log(`📦 Organized into ${this.componentGroups.size} components\n`);

    // Launch browser
    console.log('🌐 Launching headless browser...');
    this.browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    console.log('✓ Browser ready\n');
  }

  async fetchIndex() {
    const response = await fetch(`${this.baseUrl}/index.json`);
    const data = await response.json();
    return data.entries;
  }

  organizeComponents(entries) {
    Object.entries(entries).forEach(([id, entry]) => {
      // Only process story entries (not docs)
      if (entry.type === 'story') {
        const componentName = this.extractComponentName(id);

        if (!this.componentGroups.has(componentName)) {
          this.componentGroups.set(componentName, {
            title: this.extractComponentTitle(entry.title),
            variants: []
          });
        }

        this.componentGroups.get(componentName).variants.push({
          id,
          name: entry.name,
          storyTitle: entry.title
        });
      }
    });
  }

  extractComponentName(storyId) {
    // "components-button--filled" -> "button"
    // "components-text-input--default" -> "text-input"
    const match = storyId.match(/components-([^-]+(?:-[^-]+)*?)--/);
    return match ? match[1] : storyId;
  }

  extractComponentTitle(title) {
    // "Components/Button" -> "Button"
    // "Components/Text input" -> "Text Input"
    const parts = title.split('/');
    return parts.length > 1 ? parts[1] : title;
  }

  async extractComponentProps(componentName) {
    const page = await this.browser.newPage();

    try {
      const docsUrl = `${this.baseUrl}/iframe.html?viewMode=docs&id=components-${componentName}--documentation`;
      await page.goto(docsUrl, {
        waitUntil: 'networkidle2',
        timeout: 30000
      });

      // Wait for the args table to appear
      await page.waitForSelector('.docblock-argstable', { timeout: 5000 });

      const props = await page.evaluate(() => {
        const table = document.querySelector('.docblock-argstable');
        if (!table) return [];

        const rows = table.querySelectorAll('tbody tr');
        return Array.from(rows).map(row => {
          const cells = row.querySelectorAll('td');
          if (cells.length < 4) return null;

          // Position-based extraction
          // Cell 0: Name
          const name = cells[0]?.textContent?.trim() || '';

          // Cell 1: Type/Description
          const type = cells[1]?.textContent?.trim() || '';

          // Cell 2: Default value
          const defaultValue = cells[2]?.textContent?.trim() || '-';

          // Cell 3: Control/Options
          let options = [];
          const controlCell = cells[3];

          // Try to find radio buttons (for enums)
          const radioInputs = controlCell.querySelectorAll('input[type="radio"]');
          if (radioInputs.length > 0) {
            // Get the value attribute from radio buttons
            options = Array.from(radioInputs).map(input =>
              input.value || ''
            ).filter(opt => opt);
          } else {
            // Check for boolean toggle switch
            const switchInput = controlCell.querySelector('input[type="checkbox"][role="switch"]');
            if (switchInput) {
              // For booleans, we know it's true/false
              options = ['true', 'false'];
            } else {
              // Check for select dropdown
              const select = controlCell.querySelector('select');
              if (select) {
                options = Array.from(select.options).map(opt => opt.text);
              }
            }
          }

          return {
            name,
            type,
            default: defaultValue === '-' ? null : defaultValue,
            options: options.length > 0 ? options : null
          };
        }).filter(prop => prop && prop.name); // Filter out any null/invalid rows
      });

      await page.close();
      return props;

    } catch (error) {
      await page.close();
      return [];
    }
  }

  async extractComponentHTML(storyId) {
    const page = await this.browser.newPage();

    try {
      const url = `${this.baseUrl}/iframe.html?id=${storyId}&viewMode=story`;

      await page.goto(url, {
        waitUntil: 'networkidle2',
        timeout: 30000
      });

      // Wait a moment for any animations/rendering
      await new Promise(resolve => setTimeout(resolve, 500));

      const result = await page.evaluate(() => {
        const root = document.querySelector('#storybook-root, #root');
        if (!root) return { error: 'No root element found' };

        // Try to find KDS components
        const kdsElements = root.querySelectorAll('[class*="kds-"]');

        if (kdsElements.length === 0) {
          // No KDS classes found, return full root content
          return {
            html: root.innerHTML.trim(),
            warning: 'No KDS-specific classes found'
          };
        }

        // Get the first KDS component (usually the main one)
        const mainComponent = kdsElements[0];

        return {
          html: mainComponent.outerHTML.trim(),
          classes: mainComponent.className,
          tagName: mainComponent.tagName.toLowerCase()
        };
      });

      await page.close();
      return result;

    } catch (error) {
      await page.close();
      return { error: error.message };
    }
  }

  formatHTML(html) {
    // Simple formatting to make HTML more readable
    return html
      .replace(/></g, '>\n<')
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)
      .join('\n');
  }

  generateComponentMarkdown(componentName, componentData) {
    const { title, variants, props } = componentData;

    let markdown = `# ${title}\n\n`;
    markdown += `**Component Name:** \`${componentName}\`\n`;
    markdown += `**Total Variants:** ${variants.length}\n\n`;

    // Add component props table if available
    if (props && props.length > 0) {
      markdown += `## Component Props\n\n`;
      markdown += `| Name | Type | Default | Options |\n`;
      markdown += `|------|------|---------|---------|`;
      markdown += `\n`;

      props.forEach(prop => {
        const name = prop.name || '';
        const type = prop.type || '';
        const defaultVal = prop.default || '-';
        const options = prop.options ? prop.options.join(', ') : '-';

        markdown += `| ${name} | ${type} | ${defaultVal} | ${options} |\n`;
      });

      markdown += `\n`;
    }

    markdown += `---\n\n`;

    // Add each variant as a subsection
    variants.forEach((variant, index) => {
      if (index > 0) markdown += `---\n\n`;

      markdown += `## ${variant.name}\n\n`;
      markdown += `**Story ID:** \`${variant.id}\`\n`;
      markdown += `**Full Path:** ${variant.storyTitle}\n\n`;

      if (variant.html) {
        if (variant.warning) {
          markdown += `> ⚠️ ${variant.warning}\n\n`;
        }
        markdown += `\`\`\`html\n${variant.html}\n\`\`\`\n\n`;

        if (variant.classes) {
          markdown += `**Classes:** \`${variant.classes}\`\n\n`;
        }
      } else if (variant.error) {
        markdown += `> ❌ **Error:** ${variant.error}\n\n`;
      }
    });

    return markdown;
  }

  async processComponents() {
    let processedCount = 0;
    const totalComponents = this.componentGroups.size;

    for (const [componentName, componentData] of this.componentGroups) {
      processedCount++;
      console.log(`\n[${processedCount}/${totalComponents}] Processing: ${componentData.title}`);
      console.log('─'.repeat(50));

      // Extract component props from documentation
      process.stdout.write(`  📋 Extracting props...`);
      const props = await this.extractComponentProps(componentName);
      if (props.length > 0) {
        console.log(` ✓ Found ${props.length} props`);
        componentData.props = props;
      } else {
        console.log(` ⚠️  No props found`);
      }

      // Small delay before extracting variants
      await new Promise(resolve => setTimeout(resolve, 200));

      // Extract HTML for each variant
      for (const variant of componentData.variants) {
        process.stdout.write(`  ⏳ ${variant.name}...`);

        const result = await this.extractComponentHTML(variant.id);

        if (result.error) {
          console.log(` ❌ Error: ${result.error}`);
          variant.error = result.error;
        } else {
          console.log(` ✓`);
          variant.html = this.formatHTML(result.html);
          variant.classes = result.classes;
          variant.warning = result.warning;
        }

        // Small delay between requests to be polite
        await new Promise(resolve => setTimeout(resolve, 200));
      }

      // Generate markdown file
      const markdown = this.generateComponentMarkdown(componentName, componentData);
      const filename = `${componentName}.md`;
      const filepath = path.join(this.outputDir, filename);

      await fs.writeFile(filepath, markdown);
      console.log(`  💾 Saved to ${filename}`);
    }
  }

  async cleanup() {
    if (this.browser) {
      await this.browser.close();
    }
  }

  async run() {
    try {
      await this.init();
      await this.processComponents();

      console.log('\n' + '='.repeat(50));
      console.log('✅ Scraping complete!');
      console.log(`📁 Output directory: ${this.outputDir}`);
      console.log(`📄 Generated ${this.componentGroups.size} markdown files`);

    } catch (error) {
      console.error('\n❌ Fatal error:', error);
      throw error;

    } finally {
      await this.cleanup();
    }
  }
}

// Run the scraper
const scraper = new KDSScraper();
scraper.run().catch(error => {
  console.error('Scraper failed:', error);
  process.exit(1);
});
