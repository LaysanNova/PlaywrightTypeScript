const { test, expect } = require("@playwright/test");
import { PageManager } from "../page-objects/pageManager";
import { getStyle } from "./helper";

test.describe("Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/'); 
       
  });

  test("Validate All categories are ", async ({ page }) => {
    const pm = new PageManager(page);
    await pm.navigateTo().loginPage();
    await pm.onloginPage().registerAsNewUser();

    expect(page).toHaveTitle('BookCart'); 
    expect(page.url()).toContain("/register");

  }); 
});