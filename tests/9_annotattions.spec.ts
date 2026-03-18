import {test} from '@playwright/test';


//test.describe() used to group tests together
test.describe('Login Tests', async() => {
    test('Valid Login', async ({page}) => {
        await page.goto('https://www.saucedemo.com/');
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
    })

    test('Invalid Login', async ({page}) => {
        await page.goto('https://www.saucedemo.com/');
        await page.fill('#user-name', 'invalid_user');
        await page.fill('#password', 'invalid_password');
        await page.click('#login-button');
    })  

})