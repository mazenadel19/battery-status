# Sonnen Battery Status Dashboard

This project is a React application built with Vite, TypeScript, and Material-UI. It displays battery charging data in a user-friendly dashboard.

## Project Structure

-   `public/`: Public assets and mock data (backend-response.json).
-   `src/`: Contains the source code of the application.
    -   `components/`: Reusable UI components.
        -   `charts/`: Chart components (e.g., AreaChart).
        -   `ui/`: UI components (e.g., Header).
    -   `constants/`: Constants.
    -   `layout/`: Layout components (e.g., AppLayout).
    -   `pages/`: Application pages.
    -   `providers/`: Providers (e.g., AppProvider).
    -   `routes/`: Application routes.
    -   `types/`: Type definitions.
    -   `theme/`: Theme configuration.
    -   `App.tsx`: Root component.
    -   `main.tsx`: Entry point.

## Features

-   ⚡️ Vite for fast development and building
-   🔑 TypeScript for type safety
-   ⚛️ React for building user interfaces
-   📊 Material-UI for consistent, responsive, and accessible design
-   📈 MUI X-Charts for accessible data visualization
-   🧭 React Router for navigation
-   🎨 Emotion for CSS-in-JS styling
-   🧹 ESLint for code quality
-   🔄 Absolute imports configured in ESLint
-   💅 Prettier for code formatting
-   🐶 Husky for Git hooks
-   🚫 lint-staged for running linters on Git staged files
-   📝 commitlint for conventional commit messages
-   🔄 Absolute imports configured
-   📦 Lazy loading and code splitting for optimized performance
-   🤖 robots.txt file for proper web crawler guidance

## Getting Started

1. Clone the repository
2. Install dependencies:
    ```
    pnpm install
    ```
3. Start the development server:
    ```
    pnpm run dev
    ```

## Scripts

-   `pnpm run dev`: Start the development server
-   `pnpm run build`: Build for production
-   `pnpm run lint`: Run ESLint
-   `pnpm run preview`: Preview the production build locally
-   `pnpm run prepare`: Set up Husky

## Commit Convention

This project uses conventional commits. Please follow the [Conventional Commits](https://www.conventionalcommits.org/) specification when making commits.

## Contributing

Contributions are welcome! Please ensure you follow the project's commit convention and code style guidelines.

## License

[MIT](License.md)
