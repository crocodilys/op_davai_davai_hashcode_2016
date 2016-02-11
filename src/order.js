class Order {
  constructor(x, y, n) {
    this.x = x;
    this.y = y;
    this.n = n;
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }
}

module.exports = Order;
