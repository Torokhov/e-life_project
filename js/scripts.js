function Grid(width, height) {
  this.width = width;
  this.height = height;
  this.space = new Array(width * height);
}

Grid.prototype.isInside = function(vector) {
  return vector.x >= 0 && vector.x <= this.width &&
        vector.y >= 0 && vector.y <= this.height;
}

Grid.prototype.set = function(vector, value) {
  this.space[vector.x + this.width * vector.y] = value;
}

Grid.prototype.get = function(vector) {
  return this.space[vector.x + this.width * vector.y];
}

function Wall() {}

var directions = {
  "n": new Vector( 0, -1),
  "ne": new Vector( 1, -1),
  "e": new Vector( 1, 0),
  "se": new Vector( 1, 1),
  "s": new Vector( 0, 1),
  "sw": new Vector(-1, 1),
  "w": new Vector(-1, 0),
  "nw": new Vector(-1, -1)
};

function randomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function BouncingCritter() {
  this.direction = randomElement(Object.keys(directions));
}











