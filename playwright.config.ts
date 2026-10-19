import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests/e2e',
  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'npx serve out -p 3000',
    port: 3000,
    timeout: 120000,
    reuseExistingServer: false,
  },
});
