import { Page } from "@playwright/test";
import { NavigationPage } from "../page-objects/navigationPage";
import { LoginPage } from "../page-objects/loginPage";
import { ShoppingCartPage } from "../page-objects/shoppingCartPage";
import { RegistrationPage } from "./registrationPage";
import { HomePage } from "./homePage";

export class PageManager {
  private readonly page: Page;
  private readonly navigationPage: NavigationPage;
  private readonly loginPage: LoginPage;
  private readonly shoppingCartPage: ShoppingCartPage;
  private readonly registerPage: RegistrationPage;
  private readonly homePage: HomePage;

  constructor(page: Page) {
    this.page = page;
    this.navigationPage = new NavigationPage(this.page);
    this.loginPage = new LoginPage(this.page);
    this.shoppingCartPage = new ShoppingCartPage(this.page);
    this.registerPage = new RegistrationPage(this.page);
    this.homePage = new HomePage(this.page);
  }

  navigateTo() {
    return this.navigationPage;
  }

  onloginPage() {
    return this.loginPage;
  }

  onShopingCartPage() {
    return this.shoppingCartPage;
  }

  onRegisterPage() {
    return this.registerPage;
  }

  onHomePage() {
    return this.homePage;
  }
}
