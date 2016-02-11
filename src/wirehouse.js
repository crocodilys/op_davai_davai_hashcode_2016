class Wirehouse {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.products = {};
  }

  addProduct(n, product) {
    this.products[product.type] = n;
  }
}

module.exports = Wirehouse;
