# React Native + Next.js Monorepo

A full-stack monorepo combining React Native mobile development with Next.js web applications, powered by Turborepo for optimal build performance and code sharing.

## 🏗️ Project Structure

This monorepo contains:

### Apps

- **`mobile`**: React Native app with Expo Router for cross-platform mobile development
- **`web`**: Next.js web application with modern React patterns

### Shared Packages

- **`@repo/api`**: Shared API layer with Axios, TanStack Query, and Supabase
- **`@repo/design-system`**: Design system with Storybook, Vitest, and Playwright testing
- **`@repo/eslint-config`**: ESLint configurations for Next.js, Expo, and React
- **`@repo/forms`**: Form components with React Hook Form and Zod validation
- **`@repo/stores`**: State management utilities using Zustand
- **`@repo/tailwind-config`**: Shared Tailwind CSS v4 configuration
- **`@repo/typescript-config`**: TypeScript configurations for different environments
- **`@repo/ui`**: Component library with Radix UI, Lucide icons, and CVA styling

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (package manager)

### Installation

```bash
git clone <repository-url>
cd rn-next-monorepo
pnpm install
```

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

## 🛠️ Development Commands

### Start Development Servers

```bash
# Start all apps
pnpm dev

# Start web app only
pnpm web:dev

# Start mobile app only
pnpm expo:dev

# Start Storybook design system
pnpm storybook
```

### Mobile App Commands

```bash
# Start on Android device/simulator
pnpm expo:android

# Start on iOS device/simulator
pnpm expo:ios

# Start in web browser
pnpm expo:web
```

### Build Commands

```bash
# Build all apps and packages
pnpm build

# Build web app
pnpm web:build

# Build mobile for production
pnpm expo:build:all
pnpm expo:build:android
pnpm expo:build:ios

# Build Storybook
pnpm storybook:build
```

### Quality Commands

```bash
# Run linting across all packages
pnpm lint

# Run tests across all packages
pnpm test
```

### Advanced Turbo Commands

You can also run Turbo commands directly to run tasks included in the `turbo.json` file:

**With Global Turbo** (install with `npm install turbo --global`):
```bash
# Development
turbo dev
turbo dev --filter=web
turbo dev --filter=mobile

# Building
turbo build
turbo build --filter=web
turbo build --filter=mobile

# Testing & Linting
turbo test
turbo lint
turbo lint --filter=@repo/ui
```

**Without Global Turbo** (using package manager):
```bash
# Development
pnpm exec turbo dev
npx turbo dev

pnpm exec turbo dev --filter=web
npx turbo dev --filter=web

pnpm exec turbo dev --filter=mobile
npx turbo dev --filter=mobile

# Building
pnpm exec turbo build
npx turbo build

pnpm exec turbo build --filter=web
npx turbo build --filter=web

pnpm exec turbo build --filter=mobile
npx turbo build --filter=mobile

# Testing & Linting
pnpm exec turbo test
npx turbo test

pnpm exec turbo test --filter=@repo/ui
npx turbo test --filter=@repo/ui


pnpm exec turbo lint
npx turbo lint

pnpm exec turbo lint --filter=@repo/ui
npx turbo lint --filter=@repo/ui
```

**Useful Turbo Filters:**
- `--filter=web` - Target web app only
- `--filter=mobile` - Target mobile app only
- `--filter=@repo/ui` - Target UI package only
- `--filter=@repo/*` - Target all shared packages
- `--filter=...web` - Include web and its dependencies

## 🏗️ Development Utilities

This monorepo includes:

- **TypeScript** - Static type checking across all packages
- **ESLint** - Code linting with shared configurations
- **Prettier** - Code formatting
- **Husky** - Git hooks for quality gates
- **Turborepo** - Build system optimization and caching

## 📚 Tech Stack

### Frontend
- **React 19** - Latest React with concurrent features
- **Next.js** - Full-stack React framework for web
- **React Native** - Cross-platform mobile development
- **Expo Router** - File-based routing for React Native
- **Tailwind CSS v4** - Utility-first CSS framework

### State Management & Data Fetching
- **Zustand** - Lightweight state management
- **TanStack Query** - Server state management and caching
- **React Hook Form** - Performant forms with minimal re-renders

### Backend & Database
- **Supabase** - Backend-as-a-Service (Auth, Database, Storage)
- **Axios** - HTTP client for API requests

### UI & Design
- **Radix UI** - Unstyled, accessible UI primitives
- **Lucide React** - Beautiful icon library
- **Storybook** - Component development environment

### Developer Experience
- **TypeScript** - Static type checking
- **Turborepo** - Monorepo build system
- **Vitest** - Fast unit testing framework
- **Playwright** - End-to-end testing
- **ESLint & Prettier** - Code quality and formatting

### Validation & Utilities
- **Zod** - TypeScript-first schema validation
- **Class Variance Authority** - Component variant styling
- **clsx** - Conditional CSS classes

## 🚀 Getting Started

1. **Clone the repository**
2. **Install dependencies**: `pnpm install`
3. **Start development**: With global turbo: `turbo dev` or without global turbo: `npx turbo dev` or `pnpm exec turbo dev`
4. **Open apps**:
   - Web: http://localhost:3000
   - Mobile: Use Expo Go app or simulator
   - Storybook: http://localhost:6006

## 🔗 Useful Resources

- [Turborepo Documentation](https://turborepo.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Expo Documentation](https://docs.expo.dev)
- [React Native Documentation](https://reactnative.dev/docs)
- [Supabase Documentation](https://supabase.com/docs)
