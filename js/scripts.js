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

function elementFromChar(legend, ch) {
  if (ch == " ") {
    return null;
  }
  
  var element = new legend[ch]();
  element.originChar = ch;
  
  return element;
}

function World(map, legend) {
  var grid = new Grid(map[0].length, map.length);
  this.grid = grid;
  this.legend = legend;
  
  map.forEach(function(line, y) {
    for (var x = 0; x < line.length; x++) {
      grid.set(new Vector(x, y), elementFromChar(legend, line[x]));
    }
  });
}

function charFromElement(element) {
  if (element === null) {
    return " ";
  } else {
    return element.originChar;
  }
}

World.prototype.toString = function() {
  var output = "";
  for (var y = 0; y < this.grid.height; y++) {
    for (var x = 0; x < this.grid.width; x++) {
      var element = this.grid.get(new Vector(x, y));
      output += charFromElement(element);
    }
    output += "\n";
  }
  return output;
}

function View(world, vector) {
  this.world = world;
  this.vector = vector;
}


View.prototype.look = function(dir) {
  var target = this.vector.plus(directions[dir]);
  if (this.world.grid.isInside(target)) {
    return charFromElement(this.world.grid.get(target));
  } else {
    return "#";
  }
}


















