import { Page, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly cartLink;
  readonly menuButton;
  readonly logoutLink;

  constructor(page: Page) {
    this.page = page;
    this.cartLink = page.locator("[data-test='shopping-cart-link']");
    this.menuButton = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('#logout_sidebar_link');
  }

  async expectCartVisible() {
    await expect(this.cartLink).toBeVisible();
  }

  async logout() {
    await this.menuButton.click();
    await this.logoutLink.click();
  }

  async addProduct(productId: string) {
    await this.page.locator(`#add-to-cart-${productId}`).click();
  }
}
