import { Locator, Page, expect } from "@playwright/test";
import { categories } from "../testData/data";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {

    readonly categoryMat: Locator;

    constructor(page: Page) {        
        super(page);
        this.categoryMat = this.page.locator("mat-nav-list");
      }

    async getCategories() {
        const categoryMat = this.page.locator("mat-nav-list");
        const allCategories = await categoryMat.locator("mat-list-item").all();

        return allCategories;
    }

    async validateCategoryList() {

        const allCategories = await this.getCategories();        

        for (const cat of allCategories) {

            let text = await cat.textContent() || "";
            expect.soft(categories.includes(text)).toBeTruthy();
        }
    }

    async getBooks() {
        return await this.page.locator("app-book-card").all();        
    }

    async validateBooks() {
        const books = await this.getBooks();
        expect(books.length === 45).toBeTruthy();        
    }

    async clickCategory(category : string, url: string) {
     
        await this.page.getByText(category, { exact: true }).click();
        expect(this.page.url()).toBe(url);       
    }
}    