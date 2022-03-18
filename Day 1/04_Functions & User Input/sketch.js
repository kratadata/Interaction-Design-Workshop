let randomColor;
let xPos;
let yPos;
let size;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  fill(255);
  noStroke();
	randomColor = color(255,0,0);
}
   
function draw(){
  fill(randomColor); 
  size = random(10, 100);
  xPos =random(0, width);
  yPos = random(0, height);
  ellipse(xPos, yPos, size * 2, size); 
}

function keyPressed() {
	if (key == "a") { //keyCode == UP_ARROW
	   randomColor = color(random(0,255), random(0,255), random(0,255))
	}
}

function mousePressed() {
  clear();
}