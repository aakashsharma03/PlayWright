import {test} from '@playwright/test';

test ("Get by methods in Playwright", async ({page}) => {
    await page.goto("https://demo.nopcommerce.com/login");
    //ARIA - accessible rich internet applications
    
    //getByLabel
    //syntax page.getByLabel('label text')
    // It is used to find the element by its label text.
   const username = page.getByLabel("Email:");
   //const username = page.getByLabel("Email", {exact: true});
    await username.fill("skycodeqa@gmail.com");


    //getByPlaceholder
    //syntax page.getByPlaceholder('placeholder text')
    // It is used to find the element by its placeholder text.
    const SearchStore = page.getByPlaceholder("Search store");
    await SearchStore.fill("Book@123");


    //getbyText
    //syntax page.getByText('text')
    // It is used to find the element by its text content.
    const testContent = page.getByText("New Cust");
    // will fail becuase of exact const testContent = page.getByText("New Cust", {exact: true});
    console.log(await testContent.textContent());

    //getByAltText
    //syntax page.getByAltText('alt text')
    // It is used to find the element by its alt text.
    const logo = page.getByAltText("nopCommerce demo store");
    console.log(await logo.getAttribute("src"));
})