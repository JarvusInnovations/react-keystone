# react-keystone

A comprehensive React component library implementing the Pennsylvania Keystone Design System (KDS), providing accessible, reusable components that follow Commonwealth of Pennsylvania design standards.

## About

react-keystone provides React developers with production-ready components that match the official Pennsylvania Keystone Design System exactly. Built with TypeScript for full type safety, this library ensures your applications maintain visual and behavioral consistency with PA.gov standards.

## Key Features

- 🎨 **Exact KDS Implementation** - Pixel-perfect React components matching PA.gov design patterns
- 🔒 **TypeScript First** - Full type definitions for enhanced developer experience
- ♿ **Accessible by Default** - WCAG 2.1 AA compliant components
- 📦 **Tree-Shakeable** - ESM and CommonJS builds for optimal bundle sizes
- 🚀 **Zero Runtime Dependencies** - Only React as peer dependency
- 🎯 **Framework Agnostic Styling** - Works with existing KDS CSS (no style conflicts)
- 📖 **Comprehensive Documentation** - Clear examples and API documentation

## Components

20+ components systematically extracted and implemented from the official KDS Storybook, including:
- Form elements (buttons, inputs, selects, checkboxes, radios)
- Navigation (navbar, breadcrumbs, menus)
- Feedback (alerts, modals, toasts)
- Layout (containers, cards, tables)
- Typography and more

## Installation

```bash
npm install react-keystone
```

## Prerequisites

- React 18.0 or higher
- Pennsylvania KDS CSS v2.0.1 or compatible

## Usage

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

## Status

🚧 **Active Development** - Currently implementing all KDS components with regular updates.

### Implemented Components
- ✅ KeystoneButton - Full button component with all variants

### In Progress
- 🔄 Alert, Card, Form inputs, and more...

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
