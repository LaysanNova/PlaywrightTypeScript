const { test, expect } = require("@playwright/test");
import { PageManager } from "../page-objects/pageManager";

test.describe("Validate registration page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');

    const pm = new PageManager(page);    
    const loginPage = await pm.navigateTo().loginPage();
    await loginPage.registerAsNewUser();

  });

  test("Validate header color > button color ", async ({ page }) => {

    const pm = new PageManager(page);
    await pm.onRegisterPage().validateHeader();  
    await pm.onRegisterPage().validateLoginButton();
    
  });

  test("Validate fields change color", async ({ page }) => {

    const pm = new PageManager(page);
    await pm.onRegisterPage().validateFieldChangeColor();
    
  });

  test("Fields visibility", async ({ page }) => {

    const pm = new PageManager(page);
    await pm.onRegisterPage().elementsVisibility();

  });

  test("Register new user", async ({ page }) => {

    const pm = new PageManager(page);
    await pm.onRegisterPage().registerAsNewUser();

  });
});  

