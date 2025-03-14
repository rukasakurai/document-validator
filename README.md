# document-validator

## Running the Application Locally

To run the application locally, follow these steps:

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Run the development server**:
   ```bash
   pnpm dev
   ```

3. **Build the application**:
   ```bash
   pnpm build
   ```

4. **Start the production server**:
   ```bash
   pnpm start
   ```

If `pnpm` is not recognized or there are dependency conflicts, use the following command instead:
   ```bash
   npm install --legacy-peer-deps
   ```

## What is legacy-peer-deps?

The `--legacy-peer-deps` flag in npm is used to bypass peer dependency auto-installation. When you use this flag, npm will not attempt to install peer dependencies automatically, which can help resolve dependency conflicts that may arise during the installation process. This flag is particularly useful when dealing with older packages that may have conflicting or outdated peer dependencies.
