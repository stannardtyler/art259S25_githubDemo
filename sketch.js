function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("thegame");
  
  background(220);
}

function draw() {
  ellipse(mouseX, mouseY, 20);
}
