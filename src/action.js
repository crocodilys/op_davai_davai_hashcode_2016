class Action {
  constructor(drone, time, x, y, order) {
    this.drone = drone;
    this.time = time;
    this.x = x;
    this.y = y;
    this.order = order;
  }
}

module.exports = Action;
