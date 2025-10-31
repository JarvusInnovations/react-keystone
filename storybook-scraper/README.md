# KDS Component Scraper

Automated scraper for extracting HTML patterns from the Pennsylvania Keystone Design System (KDS) Storybook.

## Overview

This tool systematically crawls the KDS Storybook at https://components.pa.gov/ and extracts all component HTML patterns into organized markdown files. Each markdown file contains all variants of a component as separate subsections.

## Features

- ✅ Fetches component index from KDS Storybook
- ✅ Uses Puppeteer to render components in headless browser
- ✅ Extracts clean HTML for each component variant
- ✅ Generates one markdown file per component
- ✅ Self-contained documentation (all info in each file)
- ✅ Error handling and progress reporting

## Installation

```bash
npm install
```

## Usage

```bash
npm start
```

The scraper will:
1. Fetch the component index from KDS Storybook
2. Launch a headless browser
3. Visit each component story
4. Extract the rendered HTML
5. Generate markdown files in `./output/`

## Output Structure

```
output/
├── button.md          # All button variants
├── card.md            # All card variants
├── alert.md           # All alert variants
├── checkbox.md        # All checkbox variants
├── select.md          # All select variants
├── text-input.md      # All text input variants
└── ...                # Other components
```

## Example Output

**button.md:**
```markdown
# Button

**Component Name:** `button`
**Total Variants:** 4

---

## Filled
**Story ID:** `components-button--filled`
**Full Path:** Components/Button

```html
<button type="button" class="kds-button kds-button-filled" tabindex="0">
  Submit
</button>
```

**Classes:** `kds-button kds-button-filled`

---

## Outlined
[... more variants ...]
```

## What Gets Extracted

For each component variant:
- Story ID (for reference)
- Full component path
- Clean, formatted HTML
- CSS classes used
- Any warnings or errors

## Requirements

- Node.js >= 18.0.0
- npm or yarn
- Internet connection (to access KDS Storybook)

## Notes

- The scraper is polite and adds small delays between requests
- All output is self-contained within each markdown file
- The script will handle errors gracefully and continue processing
- Generated files can be used as reference for building React wrappers

## Troubleshooting

If components fail to extract:
- Check internet connection
- Verify https://components.pa.gov/ is accessible
- Look for error messages in console output
- Try running again (some network issues are transient)

## License

ISC
