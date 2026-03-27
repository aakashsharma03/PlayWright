import {expect, test} from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';
test('Cart verification', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.openApplication();
    await loginPage.login("standard_user", "secret_sauce");

    const homePage = new HomePage(page);
    await expect(homePage.homePageHeader).toHaveText('Swag Labs');
    await homePage.backPackaddToCart();
    await expect(homePage.cartBtn).toHaveText('1');
    await expect(homePage.backPackRemoveBtn).toBeVisible();
    await homePage.viewCart();

    const cartPage = new CartPage(page);
    await expect(cartPage.backPackCartItem).toBeVisible();
});