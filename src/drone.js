class Drone {
  constructor(n) {
    this.n = n;
    this.product = null;
  }

  load(product) {
    this.product = product;
  }

  deliver() {
    return this.product.type;
  }
}

module.exports = Drone;
