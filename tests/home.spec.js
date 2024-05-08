const { test, expect } = require("../fixtures/setupPage");
import { categories } from "../testData/data";

// require("dotenv").config();

// const url = process.env.url;

const { use } = require("../playwright.config");

test.describe("Home page", () => {
  test("Validate All categories on the page", async ({ homePage }) => {
    homePage.validateCategoryList();    
  }); 

  test("Validate books on the page", async ({ homePage }) => {
    homePage.validateBooks();
  });

  test("Validate categories filter books", async ({ homePage }) => {
    homePage.validateBooks();
  }); 

  test("Validate categories ALL active", async ({ page, homePage }) => {

    const allCategories = page.locator('mat-list-item').first();
    homePage.checkElementBackgroundColorAndColor(allCategories, 'rgb(251, 100, 27)', 'rgb(33, 37, 41)');

  });

  test("Validate categories URL", async ({ homePage }) => {

    for (const category of categories) {
      if (!category.includes("All")) {
        await homePage.clickCategory(category, use.baseURL + `filter?category=${category.toLowerCase()}`);  
      }          
    }
  });
});  
