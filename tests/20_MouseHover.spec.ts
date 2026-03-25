import { test } from '@playwright/test';

test('Mouse Hover Tests', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
    // Hover over the "Account & Lists" menu
    await page.getByRole('button', { name: 'Expand Account and Lists' }).hover();
    // click on sign in button
   // await page.getByRole('link', { name: 'Sign in', exact: true }).click();

    //force hover over the "Account & Lists" menu
    await page.getByRole('button', { name: 'Expand Account and Lists' }).hover({ force: true });
});