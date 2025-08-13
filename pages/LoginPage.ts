import { Page, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput;
  readonly passwordInput;
  readonly loginButton;
  readonly errorMessage;
  readonly errorButton;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator("[data-test='error']");
    this.errorButton = page.locator("[data-test='error-button']");
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async expectTitle(title: string) {
    await expect(this.page).toHaveTitle(title);
  }

  async expectErrorVisible() {
    await expect(this.errorMessage).toBeVisible();
  }

  async expectErrorButtonVisible() {
    await expect(this.errorButton).toBeVisible();
  }
}
