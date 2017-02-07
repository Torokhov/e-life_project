function Grid(width, height) {
  this.width = width;
  this.height = height;
  this.space = new Array(width * height);
}

Grid.prototype.set = function(vector, value) {
  this.space[vector.x + this.width * vector.y] = value;
}

Grid.prototype.get = function(vector) {
  return this.space[vector.x + this.width * vector.y];
}
