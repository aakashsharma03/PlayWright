import {test} from '@playwright/test';

test('Mouse Click', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.click('#login-button');
})
