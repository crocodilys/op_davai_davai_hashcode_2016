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


