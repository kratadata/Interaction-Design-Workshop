let r = 0;
let g = 0;
let b = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(r, g, b);
}

function mousePressed() {
	//green
  r = 0;
  g = 255;
  b = 0;
}

function mouseReleased() {
	//red
  r = 255;
  g = 0;
  b = 0;
}

function mouseDragged() {
	//blue
  r = 0;
  g = 0;
  b = 255;
}