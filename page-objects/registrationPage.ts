import { Locator, Page, expect } from "@playwright/test";
import { getStyle } from "../tests/helper";
import { text } from "stream/consumers";
import { BasePage } from "./BasePage";

export class RegistrationPage extends BasePage {
    
  readonly header: Locator;
  readonly content: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;


  constructor(page: Page) {
    super(page);
    this.header = this.page.locator("mat-card-header");
    this.content = this.page.locator("mat-card-content");

    this.firstName = this.content.locator('label mat-label').filter({hasText: "First name"});
    this.lastName = this.content.locator('label mat-label').filter({hasText: "Last name"});

  }

  async enterData() {}

  /**
   * This metod validate the form for registration
   * the color and elements o the page
   */
  async validateHeader() {

    await expect(this.header).toHaveText(
      "User Registration Already Registered? Login"
    );

    await this.checkElementBackgroundColor(this.header, "rgb(255, 64, 129)");
    await this.checkElementColor(this.header, "rgb(255, 255, 255)");

  }

  async validateLoginButton() {
    const loginButton = this.header.getByRole('button', { name: "Login" });

    await this.checkElementBackgroundColor(loginButton, "rgb(255, 255, 255)");
    await this.checkElementColor(loginButton, "rgb(0, 0, 0)");
  }

  async validateFieldChangeColor() {

    //const firstName = this.content.getByPlaceholder('First name');
    //const firstName = this.content.getByRole('textbox', {name: "First name"});
    
    let colorBeforeClick = await getStyle(this.firstName, 'color');
    expect(colorBeforeClick).toBe('rgba(0, 0, 0, 0.6)')

    await this.firstName.click();
    await this.lastName.click();

    let colorAfterClick = await getStyle(this.firstName, 'color');
    expect(colorAfterClick).toBe('rgb(244, 67, 54)')

  }

  async elementsVisibility() {

    const userName = this.content.locator('label mat-label').filter({hasText: "Username"});
    const password = this.content.locator('label mat-label').getByText("Password", {exact: true});
    const confirmPassword = this.content.locator('label mat-label').filter({hasText: "Confirm Password"});

    await expect(this.firstName).toBeVisible();
    await expect(this.lastName).toBeVisible();
    await expect(userName).toBeVisible();
    await expect(password).toBeVisible();
    await expect(confirmPassword).toBeVisible();
  }
}
