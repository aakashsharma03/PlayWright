import {test} from '@playwright/test';

test('handle iframe with name', async ({page}) => {
    await page.goto('https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_input_form');
    
    // will fail because the element is inside the iframe
    //await page.locator("#fname").fill('aakash');
    
    // to access the element inside the iframe, we need to first get the iframe element and then access the element inside it
    const frame = page.frameLocator('#iframeResult');
    await frame.locator("#fname").fill('aakash');
}
);

test('handle iframe with url', async ({page}) => {
    await page.goto('https://www.w3schools.com/html/html_iframe.asp');
    const frame = page.frame({url: "https://www.w3schools.com/html/default.asp"});
    await frame?.getByRole('button', { name: 'Button to open search field' }).click();
    await frame?.getByRole('textbox', { name: 'Search field' }).fill('playwright');
});