const fs = require('fs');

const fileNames = ['busy_day.in', 'mother_of_all_warehouses.in', 'redundancy.in'];
const targetFile = 1;

const data = fs.readFileSync(`./inputs/${fileNames[targetFile]}`).toString();
const lines = data.split('\n');

const config = lines.shift();
const [rows, columns, drones, turns, maxPayload] = config.split(' ');
console.log('config', config);

const Product = require('./src/product');
lines.shift(); // num of product types
const productWeights = lines.shift().split(' ');
const productTypes = [];
for (let i = 0; i < productWeights.length; i += 1) {
  productTypes.push(new Product(productWeights[i], i));
}

const numOfWirehouses = +lines.shift();
console.log('numOfWirehouses', numOfWirehouses);

const Wirehouse = require('./src/wirehouse');
const wirehouses = [];

const wirehousesInfo = lines.splice(0, numOfWirehouses * 2);
for (let i = 0; i < numOfWirehouses; i += 2) {
  const [x, y] = wirehousesInfo[i].split(' ');
  const wirehouse = new Wirehouse(x, y);

  const products = wirehousesInfo[i+1].split(' ');
  for (let j = 0; j < products.length; j += 1) {
    wirehouse.addProduct(products[j], productTypes[j]);
  }
  wirehouses.push(wirehouse);
}

console.log('wirehouses', wirehouses);

const Order = require('./src/Order');
const orders = [];

const numOfOrders = +lines.shift();
for (let i = 0; i < numOfOrders; i += 1) {
  const [destX, destY] = lines.shift().split(' ');
  const order = new Order(destX, destY);
  const numOfItemsInOrder = +lines.shift();
  const orderProductTypes = lines.shift().split(' ');
  for (const pType of orderProductTypes) {
    order.addProduct(productTypes[pType]);
  }
  orders.push(order);
}

console.log('orders', orders);
console.log('lines', lines);

