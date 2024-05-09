const { test, expect } = require("@playwright/test");
import { PageManager } from "../page-objects/pageManager";

require("dotenv").config();
const url = process.env.url;

exports.expect = expect;
exports.test = test.extend({
  homePage: async ({ page }, use) => {
    await page.goto('/');   
    const pm = new PageManager(page);
    const homePage = pm.onHomePage();
    await use(homePage);
  },

  loginPage: async ({ page }, use) => {
    await page.goto('/');   
    const pm = new PageManager(page);
    const loginPage = await pm.navigateTo().loginPage();
    await use(loginPage);
  },

  registrationPage: async ({ page }, use) => {
    await page.goto('/');

    const pm = new PageManager(page);
    const loginPage = await pm.navigateTo().loginPage();
    const registrationPage = await loginPage.registerAsNewUser();

    await use(registrationPage);
  }
});