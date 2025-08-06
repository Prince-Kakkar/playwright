import { test, expect } from '@playwright/test';
test('Buy iPhone and add to cart on Amazon', async ({ page }) => {
  // open amazon
  await page.goto('https://www.amazon.in');
  // search iphone in search bar and click
  await page.locator('input#twotabsearchtextbox').fill('iphone');
  await page.click("#nav-search-submit-button");
  // select 256 GB filter
  await page.locator('.a-size-base.a-color-base', { hasText: '256 GB' }).click();
  // click any model from the search products
  await page.locator('.s-main-slot a:has-text("iPhone")').first().click();
  // Wait for product detail page to load completely (ensure title is visible before proceeding)
  await page.waitForSelector('#productTitle');
  // click Add to Cart Button
  await page.locator('#add-to-cart-button:visible').click();
  // // Wait for 'Go to Cart' button to be attached and visible then click.
  const goToCartButton = page.locator('a:has-text("Go to Cart")');
  await expect(goToCartButton).toBeVisible({ timeout: 20000 });
  await goToCartButton.first().click();
  // Make sure user is on cart page
  await expect(page).toHaveURL(/.*\/cart.*/);
  // Close the browser
  await page.close();
});
