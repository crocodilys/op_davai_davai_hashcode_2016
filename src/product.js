class Product {
  constructor(weight, type) {
    this.weight = weight;
    this.type = type;
    this.warehouses = {};
  }

  addWarehouse(warehouseNumber, warehouse) {
    this.warehouses.warehouseNumber = warehouse;
  }
}

module.exports = Product;
