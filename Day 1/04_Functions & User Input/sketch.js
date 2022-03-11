let randomColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  fill(255);
  noStroke();
	randomColor = color(255,0,0);
}
   
function draw(){
  fill(randomColor); 
  var size = random(10, 100); 
  ellipse(random(0, width), random(0, height), size, size); 
}

function keyPressed() {
	if (key == "n") {
	   randomColor = color(random(0,255), random(0,255), random(0,255))
	}
}

function mousePressed() {
  clear();
}