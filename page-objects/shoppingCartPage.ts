import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ShoppingCartPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }
}    