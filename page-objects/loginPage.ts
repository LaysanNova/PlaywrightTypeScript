import { Page, expect } from "@playwright/test";
import { get } from "http";
import { RegistrationPage } from "./registrationPage";

export class LoginPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async enterValidCredentialsAndClickLogin() {
        await this.page.getByPlaceholder('Username').fill('Reena');
        await this.page.getByPlaceholder('Password').fill('Pass1234');
        await this.page.locator('mat-card-actions').getByRole('button', { name: 'Login' }).click();

        const account = await this.page.getByText('account_circlearrow_drop_down').textContent();

        expect(account).toContain('reena');
    }

    async registerAsNewUser() {

        const registerButton = this.page.getByRole('button', {name: "Register"});
        await registerButton.click(); 

        expect(this.page.url).not.toContain("/register");

        return new RegistrationPage(this.page);
    }
}    