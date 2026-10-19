import { test, expect } from '@playwright/test';

test('happy path: generate accountant blueprint', async ({ page }) => {
  await page.goto('/alkindus-os/');
  await page.click('[data-test="card-accountant"]');
  await page.waitForURL('**/consult?id=accountant');
  await page.selectOption('[data-test="country"]', 'US');
  await page.selectOption('[data-test="size"]', 'solo');
  await page.selectOption('[data-test="volume"]', 'low');
  await page.click('[data-test="submit"]');
  await page.waitForURL('**/result?id=accountant**');
  await expect(page.locator('[data-test="blueprint-preview"]')).toHaveCount(1);
  await expect(page.locator('[data-test="download-zip"]')).toHaveCount(1);
});
