import { Page, expect } from "@playwright/test";

export class ShoppingCartPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }
}    