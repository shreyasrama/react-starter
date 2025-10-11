# AGENTS.md - Development Guidelines

## Build/Lint/Test Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm check` - TypeScript type checking
- `pnpm lint` - Run oxlint for code quality
- `pnpm lint:fix` - Auto-fix linting issues
- `pnpm format` - Format code with Prettier

## Code Style Guidelines

- Use TypeScript with strict settings (`jsx: "react-jsx"`)
- Package manager: pnpm (v10.12.1+)
- ESM modules only (`"type": "module"`)
- Imports: React imports are automatic with react-jsx transform
- Formatting: Prettier with 80 char width, Tailwind plugin
- Linting: oxlint with unicorn, typescript, react, react-perf plugins
- Component naming: PascalCase (e.g., `App`)
- File naming: lowercase with extensions (.tsx for React components)
- CSS: Tailwind classes preferred (e.g., `className="font-mono text-4xl"`)
- TypeScript: Use strict mode, prefer explicit types over any
- React: Function components with hooks, use StrictMode wrapper
- Error handling: Follow TypeScript patterns, use non-null assertion sparingly
