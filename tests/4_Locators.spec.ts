//page.locator() method is used to find the element on the page. 
// It returns a locator object which can be used to perform actions on the element.

import {test} from '@playwright/test';  

test("Locators in Playwright", async ({page}) => {
    await page.goto("https://www.saucedemo.com/");
    //xpath locator
    //syntax //tagname[@attribute='value']
    const username = page.locator("//input[@id='user-name']");
    await username.fill("standard_user");
    

    //css locator
    //syntax tagname[attribute='value'] , tagname#id , tagname.classname
    //tag name is optional in css locator

    // css id locator
    const password = page.locator("input#password");
    await password.fill("secret_sauce");

    //css class locator
    //const loginButton = page.locator("input.submit-button");
    //await loginButton.click();

    //css attribute locator
    const loginbtn2 = page.locator("input[type='submit']");
    await loginbtn2.click();

    //text locator
    // syntax text=your text case insensitive
    // syntax text="your text" case sensitive

    //await page.locator("text=sauce labs backpack").click(); //case insensitive
    await page.locator("text='Sauce Labs Backpack'").click(); //case sensitive

    //id locator

    //await page.locator("id=add-to-cart").click();

    //data test id locator
    await page.locator("data-test=add-to-cart").click();
}
)