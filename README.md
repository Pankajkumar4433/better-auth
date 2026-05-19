# Better Auth - UI

This is the extracted UI portion of the Better Auth project, now moved to the project root for easy access and standalone development.

## How to run the UI locally

1.  **Install dependencies**:
    ```bash
    npm install  # or pnpm install / yarn install
    ```

2.  **Start the development server**:
    ```bash
    npm run dev
    ```

3.  **Search Functionality**:
    The UI uses Typesense for search. If you have your own Typesense server, you can configure it via environment variables in `.env`. If not configured, the UI is designed to gracefully fall back to a dummy client as seen in `components/search-dialog.tsx`.

## Project Structure

- **root**: All frontend/UI code (Next.js, Fumadocs).
- **archive/**: All original backend, server-side code, database logic, and API logic that were removed.

## Archived Backend

The original backend logic and original root configuration files are safely preserved in the `archive/` directory.

## License

This project preserves the original MIT License (available in `archive/root_config/LICENSE.md`).
