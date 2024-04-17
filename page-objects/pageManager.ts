import { Page } from "@playwright/test";
import { NavigationPage } from '../page-objects/navigationPage';
import { LoginPage } from '../page-objects/loginPage';
import { ShoppingCartPage } from '../page-objects/shoppingCartPage';
import { RegistrationPage } from "./registrationPage";


export class PageManager {

    private readonly page: Page;
    private readonly navigationPage: NavigationPage;
    private readonly loginPage: LoginPage;
    private readonly shoppingCartPage: ShoppingCartPage;
    private readonly registerPage: RegistrationPage;

    constructor(page: Page) {
        this.page = page;
        this.navigationPage = new NavigationPage(this.page);
        this.loginPage = new LoginPage(this.page);
        this.shoppingCartPage = new ShoppingCartPage(this.page);
        this.registerPage = new RegistrationPage(this.page);
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
}  