const fs = require('fs');

const fileNames = ['logo.in'];

const targetFile = 1;

const data = fs.readFileSync(`./inputs/${fileNames[targetFile]}`).toString();
const lines = data.split('\n');
const config = lines.shift();

const [rows, columns] = config.split(' ');