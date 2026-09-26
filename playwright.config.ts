import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",
  timeout: 60000,
  fullyParallel: false,
  workers: 2,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: "http://127.0.0.1:3015",
    browserName: "chromium",
    headless: true,
    launchOptions: {
      executablePath:
        process.env.PLAYWRIGHT_CHROME_PATH ||
        "C:/Program Files/Google/Chrome/Application/chrome.exe",
    },
    trace: "retain-on-failure",
  },
  webServer: {
    command: "npm run start -- -p 3015",
    // Tests expect a local, non-indexable build; a SITE_URL in .env.local must not leak in.
    // Build for tests with the same value: SITE_URL=http://localhost:3000 npm run build
    env: { SITE_URL: "http://localhost:3000" },
    url: "http://127.0.0.1:3015/en",
    timeout: 120000,
    reuseExistingServer: true,
  },
});
