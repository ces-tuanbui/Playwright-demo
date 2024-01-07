import { test, expect } from '@playwright/test';
const fs = require('node:fs');

test(`Screenshot for https://time.is/`, async ({ page }) => {
  const url = 'https://time.is/';

  // go to URL
  await page.goto(url);

  const name = `${url.replace(/[^a-zA-Z0-9]/g, '_')}.png`;
  expect(
    await page.screenshot({
      fullPage: true,
    })
  ).toMatchSnapshot(name);
});
