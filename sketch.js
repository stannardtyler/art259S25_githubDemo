function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("thegame");
  
  background(0);
}

function draw() {
  fill(0);
  stroke(255,0,0);
  ellipse(mouseX, mouseY, 20);
}
