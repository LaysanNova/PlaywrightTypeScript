import { Locator, Page, expect } from "@playwright/test";
import { HomePage } from "./homePage";
import { AccountPage } from "./accountPage";
import playwrightConfig from '../playwright.config';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async waitForNumberOfSeconds(timeInSeconds: number) {
    await this.page.waitForTimeout(timeInSeconds * 1000);
  }

  // Check element background-color
  /**
   * Validate background-color
   * @param locator - locator
   * @param color - color rgb(X, X, X) or rgba(X, X, X, X)
   */
  async checkElementBackgroundColor(locator: Locator, color: string) {
    const background = await locator.evaluate((e) => {
      return window.getComputedStyle(e).getPropertyValue("background-color");
    });
    expect(background).toBe(color);
  }

  // Check element color
  async checkElementColor(locator: Locator, color: string) {
    const background = await locator.evaluate((e) => {
      return window.getComputedStyle(e).getPropertyValue("color");
    });
    expect(background).toBe(color);
  }

  // Check element background-color and color
  /**
   * Validate background-color and color
   * @param locator - locator
   * @param backgroundColor - background color
   * @param color - color
   */
  async checkElementBackgroundColorAndColor(
    locator: Locator,
    backgroundColor: string,
    color: string
  ) {
    this.checkElementBackgroundColor(locator, backgroundColor);
    this.checkElementColor(locator, color);
  }

  // Check element property
  async checkElementProperty(
    property: string,
    locator: Locator,
    color: string
  ) {
    const elementProperty = await locator.evaluate((e) => {
      return window.getComputedStyle(e).getPropertyValue(property);
    });
    expect(elementProperty).toBe(color);
  }

  /**
   * Click logo return you to home page
   * @returns - homePgae or AccountPage
   */
  async clickLogoGoHomePage() {
 
    await this.page.getByRole("button", { name: " Book Cart " }).click();
    await this.page.waitForSelector("mat-nav-list");

    await expect(this.page.locator("mat-nav-list")).toBeVisible();

    const isVisible = await this.page
      .getByRole("button", { name: "Login" })
      .isVisible();

    expect(this.page.url()).toBe(playwrightConfig.use.baseURL)  

    if (isVisible == true) {
      return new HomePage(this.page);
    } else {
      return new AccountPage(this.page);
    }
  }
}
