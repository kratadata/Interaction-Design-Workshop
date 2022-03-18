
function setup() {
  createCanvas(windowWidth, windowHeight);
  //
  /*
  this is a comment block
  that spans across multiple lines
  */

  //what happens to square/rect if you remove the following line?
  rectMode(CENTER);
}

function draw() {
  background(255, 255, 255);
  stroke(78, 200, 45);
  fill(255, 255, 0);
  ellipse(500, 100, 50, 50);

  strokeWeight(5);
  stroke(100);
  fill(0, 255, 0);
  square(100, 100, 50);

  fill(0, 0, 255);
  noStroke();
  triangle(200, 200, 100, 200, 200, 400);
}
