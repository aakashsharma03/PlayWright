import {test} from '@playwright/test';

test('new page', async ({context}) => {

    const page = await context.newPage();
    await page.goto('https://testpages.eviltester.com/pages/navigation/windows-names/');
 
    // get the new page that opened
    const pagePromise = context.waitForEvent('page');

   // click on the new tab button
    await page.getByRole('link', { name: 'Window with name in new tab' }).click();
    const newTab = await pagePromise;

    // get the title of the new page
    console.log(await newTab.title());
});