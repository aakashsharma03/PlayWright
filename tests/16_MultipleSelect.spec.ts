import {test} from '@playwright/test';

test('Multiple Select', async ({page}) => {
    await page.goto('https://demoqa.com/select-menu');   
    const select = page.locator('#cars');
    await select.selectOption(['volvo', 'saab','audi']);



})