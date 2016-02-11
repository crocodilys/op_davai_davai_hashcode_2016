const fs = require('fs');

const fileNames = ['busy_day.in', 'mother_of_all_warehouses.in', 'redundancy.in'];
const targetFile = 0;

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
for (let i = 0; i < numOfWirehouses * 2; i += 2) {
  const [x, y] = wirehousesInfo[i].split(' ');
  const wirehouse = new Wirehouse(x, y, i);

  const products = wirehousesInfo[i+1].split(' ');
  for (let j = 0; j < products.length; j += 1) {
    wirehouse.addProduct(products[j], productTypes[j]);
  }
  wirehouses.push(wirehouse);
}

console.log('wirehouses', wirehouses);

const Order = require('./src/order');
const orders = [];

const numOfOrders = +lines.shift();
for (let i = 0; i < numOfOrders; i += 1) {
  const [destX, destY] = lines.shift().split(' ');
  const order = new Order(destX, destY, i);
  const numOfItemsInOrder = +lines.shift();
  const orderProductTypes = lines.shift().split(' ');
  for (const pType of orderProductTypes) {
    order.addProduct(productTypes[pType]);
  }
  orders.push(order);
}

console.log('orders', orders);
console.log('lines', lines);

const selectOrder = () => {
  if (orders[0].products.length == 0) {
    orders.shift();
  }
  if (orders.length == 0) {
    return null;
  }
  return orders[0];
};
const selectProduct = (order) => {
  return order.products.shift();
};

const selectWarehouse = (product) => {
  for (let i = 0; i < numOfWirehouses; i += 1) {
    const p = wirehouses[i].products;
    if (p[product.type]) {
        p[product.type] = p[product.type] - 1;
        return wirehouses[i];
    }
  }
};

const calcDist = (a, b) => {
  return Math.ceil(Math.sqrt((a.x - b.x)*(a.x - b.x) + (a.y - b.y)*(a.y - b.y)));
}

const updateData = () => {};
const calculateNewAction = () => {};
const logs = [];

const Action = require('./src/action');
const Drone = require('./src/drone');
const actions = [];
for (let i = 0; i < drones; i += 1) {
  actions.push(new Action(new Drone(i), 0, wirehouses[0].x, wirehouses[0].y, null));
}
while (true) {
  const action = actions.shift();
  if (action.time >= turns) {
    break;
  }
  if (action.drone.product == null) {
    const order = selectOrder();
    if (!order) {
      break;
    }
    const product = selectProduct(order);
    const warehouse = selectWarehouse(product);
    action.drone.load(product);
    actions.push(new Action(action.drone, action.time + calcDist(action, warehouse), warehouse.x, warehouse.y, order));
    const C = `${action.drone.n} L ${warehouse.n} ${product.type} 1`;
    logs.push(C);
    console.log(C);
  } else {
    const order = action.order;
    actions.push(new Action(action.drone, action.time + calcDist(action, order), order.x, order.y, order));
    const C = `${action.drone.n} D ${order.n} ${action.drone.deliver()} 1`;
    action.drone.product = null;
    logs.push(C);
    console.log(C);
  }
}

fs.writeFileSync('./out_' + fileNames[targetFile], `${logs.length}\n${logs.join('\n')}`);
