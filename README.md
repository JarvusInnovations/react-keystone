# react-keystone

React components for the Pennsylvania Keystone Design System (KDS)

## Overview

This package provides React component wrappers for all components in the Pennsylvania Keystone Design System, making it easy to build accessible, consistent interfaces that follow Commonwealth of Pennsylvania design standards.

## Installation

```bash
npm install react-keystone
```

## Usage

```tsx
import { Button, Alert, Card } from 'react-keystone';

function App() {
  return (
    <div>
      <Alert variant="info" title="Welcome">
        Get started with KDS components
      </Alert>
      <Button variant="filled" onClick={() => console.log('Clicked!')}>
        Click Me
      </Button>
    </div>
  );
}
```

## Features

- ✅ Full TypeScript support
- ✅ Tree-shakeable ESM and CommonJS builds
- ✅ Follows KDS design patterns exactly
- ✅ Comprehensive prop types matching KDS specifications
- ✅ Accessible components with ARIA support
- ✅ Zero runtime dependencies (React peer dependency only)

## Requirements

- React 18.0 or higher
- The KDS stylesheet must be included in your project

## Development

This package is currently under active development. Components are being systematically implemented based on the official KDS Storybook.

## License

MIT

## Resources

- [KDS Storybook](https://components.pa.gov/)
- [KDS Documentation](https://components.pa.gov/?path=/docs/installation--documentation)

## Contributing

Contributions are welcome! This package aims to be a high-quality, community-maintained implementation of KDS for React.
