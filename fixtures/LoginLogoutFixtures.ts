import {test as baseTest} from '@playwright/test';


type MyHooksFixture = {
    loginFix : void;
}


export const test = baseTest.extend<MyHooksFixture>({

    loginFix: async ({page}, use) => {
        const loginFix = undefined;
        // Setup code for loginLogoutFixture
        await page.goto('https://www.saucedemo.com/');
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
       
        await use(loginFix);
        // Teardown code for loginLogoutFixture (if needed)
        console.log("Tearing down loginLogoutFixture");
        await page.click('#react-burger-menu-btn');
        await page.click('#logout_sidebar_link');

    }
});