
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  //what happens with square/rect if you don't add this?
  rectMode(CENTER);
}

function draw() {
  background(255);
  stroke(78, 200, 45);
  fill(255, 255, 0);
  ellipse(100, 100, 50, 50);

  strokeWeight(5);
  stroke(100);
  fill(0, 255, 0);
  square(100, 100, 50);

  fill(0, 0, 255);
  noStroke();
  triangle(200, 200, 100, 200, 200, 400);
}
