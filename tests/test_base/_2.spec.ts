import { test, expect } from '@playwright/test';

test(`Screenshot for https://vi.thetimenow.com/`, async ({ page }) => {
  const url = 'https://vi.thetimenow.com/';

  // go to URL
  await page.goto(url);

  const name = `${url.replace(/[^a-zA-Z0-9]/g, '_')}.png`;
  expect(
    await page.screenshot({
      fullPage: true,
    })
  ).toMatchSnapshot(name);
});
