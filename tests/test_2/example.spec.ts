import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  const url = 'https://playwright.dev/';
  await page.goto(url);
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  const name = `${url.replace(/[^a-zA-Z0-9]/g, '_')}.png`;
  await expect(page).toHaveScreenshot(name, { fullPage: true });
});
