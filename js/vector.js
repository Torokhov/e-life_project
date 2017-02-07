function Vector(x, y) {
  this.x = x;
  this.y = y;
  
  Object.defineProperty(this, "length", {
    get: function() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  }); 
}

Vector.prototype.plus = function(vector) {
  return new Vector(this.x + vector.x, this.y + vector.y)
}

Vector.prototype.minus = function(vector) {
  return new Vector(this.x - vector.x, this.y - vector.y);
}
