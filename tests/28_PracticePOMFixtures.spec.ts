import {test} from '../fixtures/POMFixtures';
import {expect} from '@playwright/test';


test('Cart verification', async ({ page,loginPage,homePage,cartPage }) => {
  
    await loginPage.openApplication();
    await loginPage.login("standard_user", "secret_sauce");
    await expect(homePage.homePageHeader).toHaveText('Swag Labs');
    await homePage.backPackaddToCart();
    await expect(homePage.cartBtn).toHaveText('1');
    await expect(homePage.backPackRemoveBtn).toBeVisible();
    await homePage.viewCart();
    await expect(cartPage.backPackCartItem).toBeVisible();
});