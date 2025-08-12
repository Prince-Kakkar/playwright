import { Page, expect } from "@playwright/test";
export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async verifyCartPage() {
    await expect(this.page).toHaveURL(/\/cart/);
  }
}
