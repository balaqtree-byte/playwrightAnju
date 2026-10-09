import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).fill('instag');
  await page.getByText('ram login', { exact: true }).click();
  await page.getByRole('link', { name: 'Why did this happen?' }).click();
  await page.getByRole('link', { name: 'Terms of Service' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Privacy Policy' }).getByRole('link').click();
  await page.locator('#gb').getByRole('link', { name: 'Overview' }).click();
  await page.getByRole('link', { name: 'Terms of Service', exact: true }).click();
  await page.getByRole('link', { name: 'Technologies' }).click();
  await page.locator('#gb').getByRole('link', { name: 'FAQ' }).click();
});