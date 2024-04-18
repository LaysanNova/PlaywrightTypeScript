import { Page, expect } from "@playwright/test";

export class HomePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }
}    