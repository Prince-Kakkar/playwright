import { test } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { SearchResultsPage } from "../../pages/SearchResultPage"; 
import { ProductPage } from "../../pages/ProductPage";
import { CartPage } from "../../pages/CartPage";

test("Buy iPhone and add to cart on Amazon", async ({ page }) => {
  const homePage = new HomePage(page);
  const searchResultsPage = new SearchResultsPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);

  await homePage.open();
  await homePage.searchProduct("iPhone");  
  await searchResultsPage.applyFilter();
  await searchResultsPage.selectFirstProduct();
  await productPage.addToCart();
  await productPage.goToCart();
  await cartPage.verifyCartPage();
});
