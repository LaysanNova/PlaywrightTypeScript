const { test, expect } = require("@playwright/test");
import { PageManager } from "../page-objects/pageManager";
import { getStyle } from "./helper";

test.describe("Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/'); 
       
  });

  test("Validate register modal opened after login page", async ({ page }) => {
    const pm = new PageManager(page);
    await pm.navigateTo().loginPage();
    await pm.onloginPage().registerAsNewUser();

    expect(page).toHaveTitle('BookCart'); 
    expect(page.url()).toContain("/register");

  }); 

  test("Validate successful login to account (UI)", async ({ page }) => {
    const pm = new PageManager(page);
    await pm.navigateTo().loginPage();
    const account = await pm.onloginPage().validateLoginToAccount();

    expect(account).toContain('reena');
  });

  
  test("Validate login page color", async ({ page }) => {
    const pm = new PageManager(page);
    const loginPage = await pm.navigateTo().loginPage();

    const loginMat = page.locator('app-login mat-card');
    const loginHeader = loginMat.locator('mat-card-header');
    const registerButton = loginMat.getByRole('button', {name: 'Register'});      
    const loginContent = loginMat.locator('mat-card-content');    
    const loginButton = loginMat.getByRole('button', {name: 'Login'});      

    loginPage.checkElementBackgroundColor(loginHeader, "rgb(255, 64, 129)");
    let headerColor = await getStyle(loginHeader, 'color');
    expect(headerColor).toBe('rgb(255, 255, 255)');

    loginPage.checkElementBackgroundColorAndColor(loginContent, 'rgba(0, 0, 0, 0)', 'rgb(33, 37, 41)');
    loginPage.checkElementBackgroundColorAndColor(registerButton, 'rgb(255, 255, 255)', 'rgb(0, 0, 0)');
    loginPage.checkElementBackgroundColorAndColor(loginButton, 'rgb(63, 81, 181)', 'rgb(255, 255, 255)');

  });

  test("Elements visibility", async ({ page }) => {
    const pm = new PageManager(page);
    const loginPage = await pm.navigateTo().loginPage();

    await loginPage.elementsVisibility();
  });

  test("Register new user navigation", async ({ page }) => {

    const pm = new PageManager(page);
    await pm.navigateTo().loginPage();
    await pm.onloginPage().registerAsNewUser();
  });
});
