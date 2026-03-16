import {test} from '@playwright/test';

test("Locators with options in Playwright", async ({page}) => {
    await page.goto("https://www.saucedemo.com/");

    //has
    //syntax locator(selector, {has: locator})
    // It is used to find the element which has the child element with the specified selector.
    const username = page.locator(".form_group",{has: page.locator('#user-name')});
    await username.click();
    await username.pressSequentially("standard_user");


    //hasNot
    //syntax locator(selector, {hasNot: locator})
    // It is used to find the element which does not have the child element with the specified selector.
    const password = page.locator(".form_group",{hasNot: page.locator('#user-name')});
    await password.click();
    await password.pressSequentially("secret_sauce");
   
    const loginButton = page.locator("input.submit-button");
    await loginButton.click();

    //hasText
    //syntax locator(selector, {hasText: 'text'})
    // It is used to find the element which has the specified text.
    const backpack = page.locator("//a",{hasText: "Sauce Labs Backpack"});
    //await backpack.click();

    //hasNotText
    //syntax locator(selector, {hasNotText: 'text'})
    // It is used to find the element which does not have the specified text.
    const noSaucelink = page.locator(".inventory_item_name",{hasNotText: /Sauce.*/});
    await noSaucelink.click();

})