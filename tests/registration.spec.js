const { test, expect } = require("../fixtures/setupPage");

test.describe("Validate registration page", () => {
  test("Validate header color > button color ", async ({ registrationPage }) => {

    await registrationPage.validateHeader();
    await registrationPage.validateLoginButton();
    
  });

  test("Validate fields change color", async ({ registrationPage }) => {

    await registrationPage.validateFieldChangeColor();
    
  });

  test("Elements visibility", async ({ registrationPage }) => {

    await registrationPage.elementsVisibility();

  });
});  

