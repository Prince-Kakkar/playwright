import { Locator, Page, expect } from "@playwright/test";
import { time } from "console";
export class HomePage {
  readonly page: Page;
  readonly url: string = "https://www.amazon.in";
  readonly searchBox: Locator;
  readonly searchButton: Locator;
  readonly filterButton: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.searchBox = page.locator("input#twotabsearchtextbox");
    this.searchButton = page.locator("#nav-search-submit-button");
  }
  async open() {
    await this.page.goto(this.url);
    await expect(this.page).toHaveURL(this.url);
    await expect(this.searchBox).toBeVisible();
  }
  async searchProduct(productName: string) {
    await this.searchBox.fill(productName);
    await this.searchButton.click();
  }
}
