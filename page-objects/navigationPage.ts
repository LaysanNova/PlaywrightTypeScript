import { Browser, Page, expect } from "@playwright/test";
import { LoginPage } from "./loginPage";
import { ShoppingCartPage } from "./shoppingCartPage";
import { BasePage } from "./BasePage";

export class NavigationPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    async loginPage() {
        await this.page.getByRole('button', {name: 'Login'}).click();

        expect(this.page.url()).toContain("/login");
        expect(this.page).toHaveTitle("BookCart");

        return new LoginPage(this.page);

    }

    async shoppingCartPage() {
        await this.page.locator("button[ng-reflect-router-link='/shopping-cart']").click();

        expect(this.page.url()).toContain("/shopping-cart");
        expect(this.page).toHaveTitle("BookCart");
        
        return new ShoppingCartPage(this.page);
    }

    async swaggerPage() {

        const swaggerPagePromise = this.page.waitForEvent('popup');
        await this.page.getByRole("link", { name: "Swagger" }).click();
        const swaggerPage = await swaggerPagePromise;
        await expect(swaggerPage.getByRole("heading", { name: "BookCart API" })).toBeVisible();
    }

    async githubPage() {

        const githubPagePromise = this.page.waitForEvent('popup');
        await this.page.getByRole('link', { name: ' GitHub' }).click();
        const githubPage = await githubPagePromise;

        await expect(githubPage.getByRole('link', { name: 'BookCart', exact: true })).toBeVisible();
    }
}    