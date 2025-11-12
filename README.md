# Vite React TypeScript Demo

A modern frontend application demo project based on [Vite](https://vite.dev/), [React](https://react.dev/), and [TypeScript](https://www.typescriptlang.org/). Demonstrates how to quickly develop React applications using the Vite build tool.

## Tech Stack

- **Vite**: 7.1.7 (Build tool)
- **React**: 19.1.1
- **TypeScript**: 5.9.3
- **Tailwind CSS**: 4.1.16
- **ESLint**: 9.36.0

## Project Structure

```
vite-react-ts-demo/
├── src/
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   ├── index.css         # Global styles
│   └── assets/           # Static assets
├── public/               # Public static files
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.js    # Tailwind CSS configuration (if present)
└── README.md
```

## Features

- Lightning-fast development server
- Hot Module Replacement (HMR)
- TypeScript support
- Tailwind CSS integration
- Code splitting and optimization
- Modern build toolchain

## Quick Start

### Prerequisites

- Node.js 18 or higher
- npm, yarn, or pnpm

### Installation and Running

```bash
# Install dependencies
npm install
# Or
yarn install
# Or
pnpm install

# Run development server
npm run dev
# Or
yarn dev
# Or
pnpm dev
```

The application will start at `http://localhost:5173` (Vite default port).

### Build and Preview

```bash
# Build production version
npm run build

# Preview production build
npm run preview

# Run Lint
npm run lint
```

## Project Features

### Vite Advantages

- **Lightning-Fast Startup**: Uses native ESM, no bundling required
- **Fast HMR**: ESM-based HMR that maintains application state
- **Optimized Build**: Uses Rollup for production build optimization

### React 19

Uses the latest React 19 features:
- Improved concurrent rendering
- New Hooks
- Better TypeScript support

### Tailwind CSS

Uses Tailwind CSS 4.x for styling:
- Integrated via Vite plugin
- JIT compilation
- Utility-first CSS

## Development

### Hot Module Replacement

Vite provides extremely fast HMR:
- React component changes update immediately
- Maintains component state
- Style changes apply instantly

### TypeScript Configuration

Project configured with strict TypeScript:
- Type checking
- Path alias support
- React type definitions

### Code Quality

- **ESLint**: Code linting and formatting
- **TypeScript**: Compile-time type checking

## References

- [Vite Documentation](https://vite.dev/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
