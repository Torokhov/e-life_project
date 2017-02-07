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

function randomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function BouncingCritter() {
  
}
