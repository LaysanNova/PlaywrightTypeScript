const { test, expect } = require("@playwright/test");
import { PageManager } from "../page-objects/pageManager";

test.describe("Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test("Title test", async ({ page }) => {
    await expect(page).toHaveTitle("BookCart");
    console.log(page.url());

  });

  test("navigate to the page", async ({ page }) => {
    const pm = new PageManager(page);
    await pm.navigateTo().loginPage();
    await pm.navigateTo().shoppingCartPage();
    await pm.navigateTo().homePage();
    await pm.navigateTo().swaggerPage();
    await pm.navigateTo().githubPage();    

  });

  test("login UI", async ({ page }) => {
    const pm = new PageManager(page);
    await pm.navigateTo().loginPage();
    await pm.onloginPage().enterValidCredentialsAndClickLogin();

  });  
});






  // 1. Launch browser
  // 2. Navigate to url 'http://automationexercise.com'
  // 3. Verify that home page is visible successfully
  // 4. Click on 'Signup / Login' button
  // 5. Verify 'New User Signup!' is visible
  // 6. Enter name and email address
  // 7. Click 'Signup' button
  // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
  // 9. Fill details: Title, Name, Email, Password, Date of birth
  // 10. Select checkbox 'Sign up for our newsletter!'
  // 11. Select checkbox 'Receive special offers from our partners!'
  // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
  // 13. Click 'Create Account button'
  // 14. Verify that 'ACCOUNT CREATED!' is visible
  // 15. Click 'Continue' button
  // 16. Verify that 'Logged in as username' is visible
  // 17. Click 'Delete Account' button
  // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button














