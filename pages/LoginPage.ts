
import { Page,Locator } from "@playwright/test";

export class LoginPage {

    readonly page: Page;
    readonly userNameTxt : Locator;
    readonly passwordTxt : Locator;
    readonly loginBtn : Locator;


    constructor(page: Page) {
        // Initialize the page and locators
        this.page = page;
        this.userNameTxt = this.page.locator("#user-name");
        this.passwordTxt = this.page.locator("#password");
        this.loginBtn = this.page.locator("#login-button");
    }
    async openApplication() {
        // Navigate to the login page
        await this.page.goto("https://www.saucedemo.com/");
    }
    async login(username: string, password: string) {
        // Fill in the username and password fields and click the login button
        await this.userNameTxt.fill(username);
        await this.passwordTxt.fill(password);
        await this.loginBtn.click();
    }




}