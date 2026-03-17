import {test,expect} from '@playwright/test';


test('Sauce Demo homepage', async ({page}) => {
        await page.goto("https://www.saucedemo.com/");
        //Assertion
        await expect(page).toHaveURL("https://www.saucedemo.com/");
        await expect(page).toHaveTitle("Swag Labs");
}
)

test ('Sauce Demo Successful Login', async ({page}) => {
        await page.goto("https://www.saucedemo.com/");
        const username = page.getByTestId("username");  
        const password = page.getByTestId("password");
        const loginBtn = page.getByTestId("login-button");
        await username.fill("standard_user");
        await password.fill("secret_sauce");
        await loginBtn.click();
        await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
}   )

test('Sauce Demo Failed Login', async ({page}) => {
        await page.goto("https://www.saucedemo.com/");
        const username = page.getByTestId("username");  
        const password = page.getByTestId("password");  
        const loginBtn = page.getByTestId("login-button");
        await username.fill("standard_user");
        await password.fill("secret_sauce1");
        await loginBtn.click();
        await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    }   
)
