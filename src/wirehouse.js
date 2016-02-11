class Wirehouse {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.products = {};
  }

  addProduct(n, product) {
    this.products.n = product;
  }
}

module.exports = Wirehouse;
