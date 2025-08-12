import { Locator, Page, expect } from "@playwright/test";
export class ProductPage {
  readonly page: Page;
  readonly addToCartButton: Locator;
  readonly goToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.getByRole("button", { name: "Add to Cart", exact: true });
    this.goToCartButton = page.locator('#sw-gtc a:has-text("Go to Cart")');
  }
  async addToCart() {
    await expect(this.addToCartButton).toBeEnabled();
    await this.addToCartButton.first().click();
    await expect(this.goToCartButton).toBeEnabled();
  }
  async goToCart() {
    await this.goToCartButton.click();
  }
}
