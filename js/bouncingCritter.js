function randomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function BouncingCritter() {
  this.direction = randomElement(Object.keys(directions));
}
