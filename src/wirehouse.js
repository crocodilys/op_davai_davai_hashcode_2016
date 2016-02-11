class Wirehouse {
  constructor(x, y, n) {
    this.x = x;
    this.y = y;
    this.products = {};
    this.n = n;
  }

  addProduct(n, product) {
    this.products[product.type] = n;
  }
}

module.exports = Wirehouse;
