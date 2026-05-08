class ProductsPage {
  constructor(page) {
    this.page = page;
    this.productsList = page.locator('.features_items');
    this.productCards = page.locator('.product-image-wrapper');
    this.searchInput = page.locator('#search_product');
    this.searchBtn = page.locator('#submit_search');
    this.searchResults = page.locator('.productinfo');
    this.continueShoppingBtn = page.locator('button:has-text("Continue Shopping")');
    this.viewCartLink = page.locator('u:has-text("View Cart")').first();
    this.firstViewProduct = page.locator('.choose a').first();
  }

  async isLoaded() {
    await this.productsList.waitFor({ state: 'visible', timeout: 60000 });
    return true;
  }

  async searchProduct(productName) {
    await this.searchInput.fill(productName);
    await this.searchBtn.click();
  }

  async getSearchResultsCount() {
    return await this.searchResults.count();
  }

  async addFirstProductToCart() {
    await this.page.evaluate(() => {
      const btn = document.querySelector('.productinfo a.add-to-cart');
      if (btn) btn.click();
    });
  }

  async continueShopping() {
    await this.continueShoppingBtn.waitFor({ state: 'visible', timeout: 15000 });
    await this.continueShoppingBtn.click();
  }

  async viewCart() {
    await this.viewCartLink.waitFor({ state: 'visible', timeout: 15000 });
    await this.viewCartLink.click();
  }

  async viewFirstProductDetails() {
    await this.page.evaluate(() => {
      const link = document.querySelector('.choose a');
      if (link) link.click();
    });
    await this.page.waitForURL(/.*product_details/, { timeout: 60000 });
  }
}

module.exports = { ProductsPage };