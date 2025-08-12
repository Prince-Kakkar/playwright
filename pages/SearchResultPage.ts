import { Locator, Page, expect } from "@playwright/test";
import { time } from "console";
export class SearchResultsPage {
  readonly page: Page;
  readonly filterButton: Locator;
  readonly productLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.filterButton = page.locator('a[aria-label*="256 GB"]');
    this.productLink = page.locator(".s-main-slot a:has(h2)");
  }
  async applyFilter() {
    await expect(this.filterButton).toBeVisible({ timeout: 15000 });
    await expect(this.productLink.first()).toBeVisible();
  }
  async selectFirstProduct() {
    await this.page.waitForSelector(".s-main-slot a:has(h2)", { timeout: 5000 });
    await this.productLink.first().click();
  }
}
