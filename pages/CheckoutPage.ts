import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly checkoutButton;
  readonly firstName;
  readonly lastName;
  readonly postalCode;
  readonly continueButton;
  readonly finishButton;
  readonly backToProductsButton;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = page.locator('#checkout');
    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.postalCode = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
    this.finishButton = page.locator('#finish');
    this.backToProductsButton = page.locator('#back-to-products');
  }

  async checkout(first: string, last: string, zip: string) {
    await this.checkoutButton.click();
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.postalCode.fill(zip);
    await this.continueButton.click();
    await this.finishButton.click();
  }

  async expectOrderComplete() {
    await expect(this.backToProductsButton).toBeVisible();
  }
}
