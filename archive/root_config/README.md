# Better Auth - UI Extraction

This project is an extracted version of the Better Auth UI, preserving its frontend components and search functionality.

## Project Structure

- **Docs/**: This folder contains the frontend/UI code, including pages, components, and the search functionality (powered by Typesense/Fumadocs).
- **archive/**: This folder contains all the original backend, server-side code, database logic, and API logic that were removed from the active UI project.

## How to run the UI locally

This project uses a pnpm monorepo structure. To run the UI:

1.  **Install dependencies**:
    ```bash
    pnpm install
    ```

2.  **Start the development server**:
    ```bash
    pnpm --filter docs dev
    ```
    Alternatively, you can navigate to the `Docs` directory and run:
    ```bash
    cd Docs
    pnpm dev
    ```

3.  **Search Functionality**:
    The UI uses Typesense for search. If you have your own Typesense server, you can configure it via environment variables in `Docs/.env`. If not configured, the UI is designed to gracefully fall back to a dummy client as seen in `Docs/components/search-dialog.tsx`.

## Archived Backend

The original backend logic is safely preserved in the `archive/` directory. This includes:
- Core authentication logic (`archive/packages/better-auth`)
- Database adapters (`archive/packages/*-adapter`)
- Demo applications (`archive/demo`)
- E2E tests (`archive/e2e`)

## License

This project preserves the original [MIT License](./LICENSE.md).
