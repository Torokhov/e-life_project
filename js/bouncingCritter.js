function randomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function BouncingCritter() {
  this.direction = randomElement(Object.keys(directions));
}

BouncingCritter.prototype.act = function(view) {
  if (view.look(this.direction) !== " ") {
    this.direction = view.find(" ") || "s";
  }
  
  return {type: "move", direction: this.direction};
}
