const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { LoginPage } = require('../pages/LoginPage');

test.describe('Login Page', () => {

  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await homePage.goToLogin();
  });

  test('should display login form', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await expect(loginPage.loginEmail).toBeVisible();
    await expect(loginPage.loginPassword).toBeVisible();
    await expect(loginPage.loginBtn).toBeVisible();
  });

  test('should show error with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('invalid@email.com', 'wrongpassword');
    await expect(loginPage.errorMessage).toBeVisible();
  });

  test('should display signup form', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await expect(loginPage.signupName).toBeVisible();
    await expect(loginPage.signupEmail).toBeVisible();
    await expect(loginPage.signupBtn).toBeVisible();
  });

});