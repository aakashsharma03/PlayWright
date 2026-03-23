import {expect, test} from '@playwright/test';

test('Radio Button', async ({page}) => {
    await page.goto('https://artoftesting.com/samplesiteforselenium');
    const maleRadioButton = page.locator("#male");
    await maleRadioButton.check();
    await expect(maleRadioButton).toBeChecked();
    const femaleRadioButton = page.locator("#female");
    await femaleRadioButton.check();
    await expect(maleRadioButton).not.toBeChecked();
})

