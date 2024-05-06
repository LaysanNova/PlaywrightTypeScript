const { test, expect } = require("@playwright/test");
import { PageManager } from "../page-objects/pageManager";

test.describe("Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Title test", async ({ page }) => {
    await expect(page).toHaveTitle("BookCart");
    console.log(page.url());
  });

  test("navigate to the page", async ({ page }) => {
    const pm = new PageManager(page);
    await pm.navigateTo().loginPage();
    await pm.onloginPage().clickLogoGoHomePage();

    await pm.navigateTo().shoppingCartPage();
    await pm.onShopingCartPage().clickLogoGoHomePage();

    await pm.navigateTo().swaggerPage();
    await pm.navigateTo().githubPage();
  });
});

