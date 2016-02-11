const fs = require('fs');

const fileNames = ['busy_day.in', 'mother_of_all_warehouses.in', 'redundancy.in'];
const targetFile = 1;

const data = fs.readFileSync(`./inputs/${fileNames[targetFile]}`).toString();
const lines = data.split('\n');

const config = lines.shift();
const [rows, columns, drones, turns, maxPayload] = config.split(' ');
console.log('config', config);

lines.shift(); // num of product types
const productWeights = lines.shift().split(' ');
// console.log('weights', productWeights);

const numOfWirehouses = +lines.shift();
console.log('numOfWirehouses', numOfWirehouses);

const wirehousesInfo = lines.splice(0, numOfWirehouses * 2);
for (let i = 0; i < numOfWirehouses; i += 2) {
  const [x, y] = wirehousesInfo[i].split(' ');
  console.log(`wirehouse[${x}][${y}]`);
  const products = wirehousesInfo[i+1].split(' ');
  for (let j = 0; j < products.length; j += 1) {
    // console.log('');
  }
}

