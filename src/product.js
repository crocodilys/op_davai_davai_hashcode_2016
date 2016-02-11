class Product {
  constructor(weight) {
    this.weight = weight;
    this.warehouses = {};
  }

  addWarehouse(warehouseNumber, warehouse) {
    this.warehouses.warehouseNumber = warehouse;
  }
}

module.exports = Product;
