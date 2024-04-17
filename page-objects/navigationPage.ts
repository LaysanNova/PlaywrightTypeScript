import { Browser, Page, expect } from "@playwright/test";
import { LoginPage } from "./loginPage";

export class NavigationPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async loginPage() {
        await this.page.getByRole('button', {name: 'Login'}).click();                

        return new LoginPage(this.page);

    }

    async shoppingCartPage() {
        await this.page.locator("button[ng-reflect-router-link='/shopping-cart']").click();
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

    /**
     * Click logo return you to home page
     */
    async homePage() {

        const logo = this.page.getByRole('button', {name: 'Book Cart'});
        await logo.click();
        await expect(this.page.locator("mat-nav-list")).toBeVisible();      

    }
}    