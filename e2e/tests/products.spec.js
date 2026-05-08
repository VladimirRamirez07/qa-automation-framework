const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { ProductsPage } = require('../pages/ProductsPage');

test.describe('Products Page', () => {

  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await homePage.goToProducts();
  });

  test('should load products page successfully', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    const isLoaded = await productsPage.isLoaded();
    expect(isLoaded).toBeTruthy();
    await expect(page).toHaveURL(/.*products/);
  });

  test('should display product cards', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    const count = await productsPage.productCards.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should search for a product', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.searchProduct('dress');
    const results = await productsPage.getSearchResultsCount();
    expect(results).toBeGreaterThan(0);
  });

  test('should add product to cart', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.addFirstProductToCart();
    await page.waitForSelector('button:has-text("Continue Shopping")', { state: 'visible' });
    await productsPage.continueShopping();
    await expect(productsPage.productsList).toBeVisible();
  });

  test('should view product details', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.viewFirstProductDetails();
    await expect(page).toHaveURL(/.*product_details/);
  });

});