import { Locator, Page, expect } from "@playwright/test";

export class HelperBase {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async waitForNumberOfSeconds(timeInSeconds: number) {
    await this.page.waitForTimeout(timeInSeconds * 1000);
  }

  // Check element background-color
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

    // Check element property
    async checkElementProperty(property: string, locator: Locator, color: string) {
      const elementProperty = await locator.evaluate((e) => {
        return window.getComputedStyle(e).getPropertyValue(property);
      });
      expect(elementProperty).toBe(color);
    }
}
