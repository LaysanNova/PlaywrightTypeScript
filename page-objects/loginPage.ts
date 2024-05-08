import { Page, expect } from "@playwright/test";
import { RegistrationPage } from "./registrationPage";
import { AccountPage } from "./accountPage";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async enterValidCredentialsAndClickLogin() {
    await this.page.getByPlaceholder("Username").fill("Reena");
    await this.page.getByPlaceholder("Password").fill("Pass1234");
    await this.page
      .locator("mat-card-actions")
      .getByRole("button", { name: "Login" })
      .click();

    return new AccountPage(this.page);
  }

  async registerAsNewUser() {

    const registerButton = this.page.getByRole("button", { name: "Register" });
    await registerButton.click();

    expect(this.page.url()).toContain('/register');

    return new RegistrationPage(this.page);
  }

  async validateLoginToAccount() {
    await this.enterValidCredentialsAndClickLogin();
    const account = await this.page
      .getByText("account_circlearrow_drop_down")
      .textContent();

    return account;
  }

  async elementsVisibility() {
    const loginMat = this.page.locator("app-login mat-card");
    const loginHeader = loginMat.locator("mat-card-header");
    const headerText = await loginHeader.textContent();

    expect(headerText).toContain("Login New User? Register");

    const registerButton = loginMat.getByRole("button", { name: "Register" });

    const loginContent = loginMat.locator("mat-card-content");
    const userName = loginMat.getByRole("textbox", { name: "Username" });
    const password = loginMat.getByRole("textbox", { name: "Password" });

    const loginButton = loginMat.getByRole("button", { name: "Login" });

    await expect(registerButton).toBeVisible();
    await expect(password).toBeVisible();
    await expect(userName).toBeVisible();
    await expect(loginButton).toBeVisible();
  }
}
