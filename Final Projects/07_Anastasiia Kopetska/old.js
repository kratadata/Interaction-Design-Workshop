let width = 1000, height = 1000;
let xPos;
let yPos;
let randomColor;
var circleDia;

function setup() {
  createCanvas(width, height);
  background(255);
  frameRate(10);
  noStroke();
}

function draw() { 
  xPos = random(0, width);
  yPos = random(0, height);

  circleDia = random(30, 98);

  randomColor =  color (random (255), random (255), random (255), random (255));
  randomColor2 =  color (random (255), random (255), random (255), random (255));

  fill(randomColor);
  circle(xPos, yPos, circleDia);
}
