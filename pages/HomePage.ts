import { Page , Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly homePageHeader: Locator;
    readonly backPackaddtoCartBtn: Locator;
    readonly backPackRemoveBtn: Locator;
    readonly cartBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homePageHeader = this.page.getByText('Swag Labs');
        this.backPackaddtoCartBtn = this.page.getByTestId('add-to-cart-sauce-labs-backpack');
        this.backPackRemoveBtn = this.page.getByTestId('remove-sauce-labs-backpack');
        this.cartBtn = this.page.getByTestId('shopping-cart-link');
    }

    async backPackaddToCart() {
        await this.backPackaddtoCartBtn.click();
    }

    async viewCart() {
        await this.cartBtn.click();
    }
}
