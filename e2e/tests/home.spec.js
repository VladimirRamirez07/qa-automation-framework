const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');

test.describe('Home Page', () => {

  test('should load home page successfully', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    const isLoaded = await homePage.isLoaded();
    expect(isLoaded).toBeTruthy();
    await expect(page).toHaveTitle(/Automation Exercise/);
  });

  test('should display navigation bar', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await expect(homePage.signupLoginBtn).toBeVisible();
    await expect(homePage.productsBtn).toBeVisible();
    await expect(homePage.cartBtn).toBeVisible();
  });

  test('should navigate to login page', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await homePage.goToLogin();
    await expect(page).toHaveURL(/.*login/);
  });

  test('should navigate to products page', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await homePage.goToProducts();
    await expect(page).toHaveURL(/.*products/);
  });

});