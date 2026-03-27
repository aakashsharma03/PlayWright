import {test as basetest} from "@playwright/test";
import {LoginPage} from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { CartPage } from "../pages/CartPage";

type POMFixture = {
    loginPage: LoginPage;
    homePage: HomePage;
    cartPage: CartPage;
}

export const test = basetest.extend<POMFixture>({
    loginPage: async ({page}, use) => {
        // Setup code for loginPage fixture 
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    cartPage: async ({page}, use) => {
        // Setup code for cartPage fixture 
        const cartPage = new CartPage(page);
        await use(cartPage);
    },
    homePage: async ({page}, use) => {
        // Setup code for homePage fixture 
        const homePage = new HomePage(page);
        await use(homePage);
    }   
});