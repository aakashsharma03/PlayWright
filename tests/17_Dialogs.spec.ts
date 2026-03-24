import { expect, test } from "@playwright/test";

test('Alert Dialog', async ({ page }) => {
    page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('alert');
        console.log(dialog.message());
        await dialog.accept();
    });
      await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.getByRole('button', { name: 'Click for JS Alert' }).click();
})

test('Confirm Dialog', async ({ page }) => {
page.on('dialog', async dialog => {
    expect(dialog.type()).toBe('confirm');
    console.log(dialog.message());
    await dialog.dismiss();
});
await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
})

test('Prompt Dialog', async ({ page }) => {
    page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('prompt');
        console.log(dialog.message());
        await dialog.accept('Playwright');
    });
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.getByRole('button', { name: 'Click for JS Prompt' }).click();
})