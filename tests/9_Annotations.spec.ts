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
    test.skip('Skipped Test', async ({page}) => {
        await page.goto('https://www.saucedemo.com/');
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', '  secret_sauce');
   
        await page.click('#login-button');
    })

    test('Only this test will run', async ({page}) => {
        await page.goto('https://www.saucedemo.com/');
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
    })  ;

    // test('Slow Test', async ({page}) => {
    //     test.slow(); // Mark this test as slow
    //     await page.goto('https://www.saucedemo.com/');
    //     await page.fill('#user-name', 'standard_user');
    //     await page.fill('#password', '  secret_sauce');
    //     await page.click('#login-button');
    // })

    test.fixme('Test with known issue', async ({page}) => {
        await page.goto('https://www.saucedemo.com/');
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', '  secret_sauce');
        await page.click('#login-button');
    })

    // test('Test with custom timeout', async ({page}) => {
    //     test.setTimeout(10000); // Set timeout to 10 seconds
    //     await page.goto('https://www.saucedemo.com/');
    //     await page.fill('#user-name', 'standard_user');
    //     await page.fill('#password', '  secret_sauce');
    //     await page.click('#login-button');
    // })  

    test('failed test', async ({page}) => {
        test.fail(); // Mark this test as expected to fail
        await page.goto('https://www.saucedemo.com/');
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', '  secret_sauce');
        await page.click('#login-button');
    });
