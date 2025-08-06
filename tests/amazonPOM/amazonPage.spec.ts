import { test } from "@playwright/test";
import { AmazonPage } from "../../pages/amazonPage";

test("Buy iPhone and add to cart on Amazon", async ({ page }) => {
  //create an instance of AmazonPage
  const amazonPage = new AmazonPage(page);
  // Open Amazon
  await amazonPage.openAmazon();
  // Search for iPhone
  await amazonPage.searchProduct("iPhone");
  // Select the first filter
  await amazonPage.selectFilter();
  // Select the first product
  await amazonPage.selectProduct();
  // Add to cart
  await amazonPage.addToCart();
  // Wait for 'Go to Cart' button to be visible and click it
  await amazonPage.goToCart();
  // Verify cart page
  await amazonPage.verifyCartPage();
  // Close browser
  await amazonPage.closeBrowser();
});
