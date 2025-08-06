import { Locator, Page, expect } from "@playwright/test";
export class AmazonPage {
  page: Page;
  readonly url: string = "https://www.amazon.in";
  readonly searchBox: Locator;
  readonly searchButton: Locator;
  readonly filterButton: Locator;
  readonly productLink: Locator;
  readonly addToCartButton: Locator;
  readonly goToCartButton: Locator;

  constructor(page: Page) {
   this.page = page;
   this.searchBox = page.locator("input#twotabsearchtextbox");
   this.searchButton = page.locator("#nav-search-submit-button");
   this.filterButton = page.locator('a[aria-label*="256 GB"]');
   this.productLink = page.locator(".s-main-slot a:has(h2)");
   this.addToCartButton = page.getByRole("button", {name: "Add to Cart",exact: true,});
   this.goToCartButton = page.locator('#sw-gtc a:has-text("Go to Cart")');
  }
  async openAmazon() {
    await this.page.goto(this.url);
    await expect(this.page).toHaveURL(this.url);
  }
  async searchProduct(productName: string) {
    await expect(this.searchBox).toBeVisible();
    await this.searchBox.fill(productName);
    await this.searchButton.click();
    await expect(this.page.locator(".s-main-slot")).toBeVisible();
  }
  async selectFilter() {
    await expect(this.filterButton).toBeVisible();
    await this.filterButton.click();
    await expect(this.productLink.first()).toBeVisible(); // Ensure filtered results are visible
  }
  async selectProduct() {
    await this.page.waitForSelector(".s-main-slot a:has(h2)", { timeout: 5000 });
    await this.productLink.first().click();
    await expect(this.addToCartButton).toBeVisible({ timeout: 7000 });
  }
  async addToCart() {        
    await this.addToCartButton.click();
    await expect(this.goToCartButton).toBeVisible({ timeout: 7000 });    
  }
  async goToCart() {    
    await this.goToCartButton.click();
  }
  async verifyCartPage() {
   await expect(this.page).toHaveURL(/\/cart/);
  }
  async closeBrowser() {
    await this.page.close();
  }
}
