import {chromium, test} from '@playwright/test';

test('page w/o fixture'  ,async()=> {

const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();

await page.goto("https://www.google.com/");
console.log(await page.title()); 
}
)