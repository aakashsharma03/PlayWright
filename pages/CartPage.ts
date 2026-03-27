import { Locator, Page } from "@playwright/test";

export class CartPage {
    readonly page: Page;
    readonly backPackCartItem: Locator

    constructor(page: Page) {
        this.page = page;
        this.backPackCartItem = this.page.getByText('Sauce Labs Backpack');
    }   

}