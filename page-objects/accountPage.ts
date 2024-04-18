import { Page, expect } from "@playwright/test";

export class AccountPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }
}    