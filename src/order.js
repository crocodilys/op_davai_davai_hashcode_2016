class Order {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }
}

module.exports = Order;
