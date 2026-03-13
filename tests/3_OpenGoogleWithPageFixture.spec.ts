import {test} from '@playwright/test';

test("Open Google with page fixture", async ({page}) => {
    await page.goto("https://www.google.com");
    console.log("Google is opened");
})