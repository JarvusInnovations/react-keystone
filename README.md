# react-keystone

An **unofficial** React component library implementing the Pennsylvania Keystone Design System (KDS), providing accessible, reusable components that follow Commonwealth of Pennsylvania design standards.

> ⚠️ **Disclaimer**: This is an unofficial, community-maintained library. It is not affiliated with or endorsed by the Commonwealth of Pennsylvania or the official Keystone Design System team. For official resources, visit [components.pa.gov](https://components.pa.gov/).

## About

react-keystone provides React developers with production-ready components that match the official Pennsylvania Keystone Design System patterns. Built with TypeScript for full type safety, this library helps ensure your applications maintain visual and behavioral consistency with PA.gov standards.

## Key Features

- 🎨 **Exact KDS Implementation** - Pixel-perfect React components matching PA.gov design patterns
- 🔒 **TypeScript First** - Full type definitions for enhanced developer experience
- ♿ **Accessible by Default** - WCAG 2.1 AA compliant components
- 📦 **Tree-Shakeable** - ESM and CommonJS builds for optimal bundle sizes
- 🚀 **Zero Runtime Dependencies** - Only React as peer dependency
- 🎯 **Framework Agnostic Styling** - Works with existing KDS CSS (no style conflicts)
- 📖 **Comprehensive Documentation** - Clear examples and API documentation

## Components

Includes 21 components systematically extracted from the official KDS Storybook:

### Form Components (7)

- **KeystoneButton** - Primary, secondary, and outlined button variants with icon support
- **KeystoneTextInput** - Text input fields with labels, validation, and help text
- **KeystoneSelect** - Dropdown select menus with native HTML select styling
- **KeystoneCheckbox** - Checkbox inputs for multiple selections
- **KeystoneRadio** - Radio button inputs for single selections
- **KeystoneTextarea** - Multi-line text input with configurable rows
- **KeystoneSearchInput** - Search input with icon and clear functionality

### Feedback Components (1)

- **KeystoneAlert** - Alert notifications with info, success, warning, and error variants

### Layout Components (2)

- **KeystoneCard** - Structured content cards with header, body, and footer
- **KeystoneCardContainer** - Simple card wrapper for forms and content sections

### Navigation Components (2)

- **KeystoneLink** - Text links with proper KDS styling and external link indicators
- **KeystoneBreadcrumb** - Breadcrumb navigation trails

### Data Display Components (1)

- **KeystoneTag** - Labels and tags for categorization with removable option

### Content Components (8)

- **KeystoneIconObject** - Icon with associated text for feature lists
- **KeystoneAccordion** - Collapsible content sections for FAQs
- **KeystoneFooter** - Page footer with multi-column layout
- **KeystoneListGroup** - Vertical lists with interactive states
- **KeystoneMenuList** - Dropdown menus with icons and dividers
- **KeystoneNavbar** - Main site navigation with responsive design
- **KeystoneTable** - Data tables with sorting and styling options
- **KeystoneTypography** - Consistent text styling with design tokens

## Installation

```bash
npm install react-keystone
```

## Prerequisites

- React 18.0 or higher
- Pennsylvania Keystone Design System v2.0.1 or compatible

## Setup

This library provides React component wrappers for KDS. You'll need to set up the KDS CSS and assets separately.

### Step 1: Install react-keystone

```bash
npm install react-keystone
```

### Step 2: Install Pennsylvania KDS

Follow the [official KDS installation guide](https://components.pa.gov/?path=/docs/installation--documentation) to download and set up the Keystone Design System in your project.

**Quick Summary:**

1. **Download the KDS distribution package** from the official site (current version: 2.0.1)
2. **Extract and place the `dist/` folder** in your project's `public/` directory:

   ```
   public/
   └── kds/
       └── 2.0.1/
           ├── main.min.css
           ├── main.min.js
           ├── main.LICENSE.txt
           └── assets/
               ├── fonts/
               └── icons/
   ```

3. **Link the CSS in your HTML** (e.g., `index.html`):

   ```html
   <link rel="stylesheet" href="/kds/2.0.1/main.min.css" />
   ```

### Step 3: Include the KDS Fonts

KDS uses **Plus Jakarta Sans** and **Zilla Slab** fonts. Choose one of these options:

#### Option A: Google Fonts (Recommended - Easiest)

Add to your HTML `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Zilla+Slab:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
```

#### Option B: Self-Hosted Fonts

If you need to self-host fonts, the KDS distribution package includes font files in `assets/fonts/`. See the [official font installation guide](https://components.pa.gov/?path=/docs/installation--documentation#typography-including-the-fonts) for detailed instructions.

### Step 4: Use react-keystone Components

```tsx
import { KeystoneButton } from 'react-keystone';

function App() {
  return (
    <div>
      <KeystoneButton variant="filled" onClick={() => console.log('Clicked!')}>
        Submit
      </KeystoneButton>

      <KeystoneButton variant="outlined" icon>
        Next Step
      </KeystoneButton>

      <KeystoneButton link href="/home">
        Go Home
      </KeystoneButton>
    </div>
  );
}
```

## Framework-Specific Setup

### Vite / React

In your `index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="/kds/2.0.1/main.min.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Zilla+Slab:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### Next.js

In your `app/layout.tsx` or `pages/_app.tsx`:

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My PA App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/kds/2.0.1/main.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Zilla+Slab:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

## Usage Examples

### Form Example

```tsx
import {
  KeystoneTextInput,
  KeystoneSelect,
  KeystoneCheckbox,
  KeystoneButton,
  KeystoneCardContainer
} from 'react-keystone';

function ContactForm() {
  return (
    <KeystoneCardContainer padding="p-4">
      <h2>Contact Us</h2>

      <KeystoneTextInput
        label="Full Name"
        placeholder="Enter your name"
        required
      />

      <KeystoneTextInput
        label="Email"
        type="email"
        helpText="We'll never share your email"
      />

      <KeystoneSelect
        label="County"
        options={[
          { value: '', label: 'Select a county' },
          { value: 'adams', label: 'Adams' },
          { value: 'allegheny', label: 'Allegheny' }
        ]}
      />

      <KeystoneCheckbox
        label="Subscribe to updates"
        name="subscribe"
      />

      <KeystoneButton variant="primary">Submit</KeystoneButton>
    </KeystoneCardContainer>
  );
}
```

### Navigation Example

```tsx
import { KeystoneNavbar, KeystoneBreadcrumb } from 'react-keystone';

function Layout() {
  return (
    <>
      <KeystoneNavbar
        brandText="My PA Application"
        navItems={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Contact', href: '/contact' }
        ]}
      />

      <KeystoneBreadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Apply', href: '/services/apply' }
        ]}
      />
    </>
  );
}
```

### Alert & Typography Example

```tsx
import { KeystoneAlert, KeystoneTypography } from 'react-keystone';

function InfoPage() {
  return (
    <div>
      <KeystoneTypography variant="display-lg" as="h1">
        Welcome to PA Services
      </KeystoneTypography>

      <KeystoneAlert variant="info" title="Important Notice">
        All applications must be submitted by the deadline.
      </KeystoneAlert>

      <KeystoneTypography variant="body-md" as="p">
        Access state services and resources through our digital platform.
      </KeystoneTypography>
    </div>
  );
}
```

## Status

✅ **Production Ready** - All 21 KDS components fully implemented and tested.

All components have been systematically extracted from the official Pennsylvania Keystone Design System Storybook and are ready for production use.

## Development

This package is being systematically built by extracting HTML patterns and component specifications from the official Pennsylvania Keystone Design System Storybook.

## Contributing

This is a community-driven effort to provide high-quality React implementations of Pennsylvania's design system. Contributions are welcome!

## License

MIT

## Resources

- [KDS Storybook](https://components.pa.gov/)
- [KDS Documentation](https://components.pa.gov/?path=/docs/installation--documentation)

---

*Built to support Pennsylvania digital services and improve citizen experiences through consistent, accessible design.*
