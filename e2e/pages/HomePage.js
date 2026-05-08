class HomePage {
  constructor(page) {
    this.page = page;
    this.logo = page.locator('img[alt="Website for automation practice"]');
    this.signupLoginBtn = page.locator('a[href="/login"]').first();
    this.productsBtn = page.locator('a[href="/products"]').first();
    this.cartBtn = page.locator('a[href="/view_cart"]').first();
    this.searchInput = page.locator('#search_product');
    this.searchBtn = page.locator('#submit_search');
  }

  async navigate() {
    await this.page.goto('/', { waitUntil: 'domcontentloaded' });
  }

  async isLoaded() {
    await this.logo.waitFor({ state: 'visible' });
    return true;
  }

  async goToLogin() {
    await this.signupLoginBtn.click();
    await this.page.waitForURL(/.*login/, { timeout: 60000 });
  }

  async goToProducts() {
    await this.page.goto('/products', { waitUntil: 'domcontentloaded', timeout: 60000 });
  }

  async searchProduct(productName) {
    await this.page.goto('/products', { waitUntil: 'domcontentloaded', timeout: 60000 });
    await this.searchInput.fill(productName);
    await this.searchBtn.click();
  }
}

module.exports = { HomePage };