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
for (const w of productWeights) {
  productTypes.push(new Product(w));
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

const numOfOrders = +lines.shift();
for (let i = 0; i < numOfOrders; i += 1) {
  const [destX, destY] = lines.shift().split(' ');
  const numOfItemsInOrder = +lines.shift();
  const orderProductTypes = lines.shift().split(' ');
  for (const pType of orderProductTypes) {
    productTypes[pType];
  }
}

