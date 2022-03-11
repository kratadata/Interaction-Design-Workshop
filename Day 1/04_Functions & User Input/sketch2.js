function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	rectMode(CENTER);
}

function draw() {
	
	if (mouseIsPressed) {
    background(0);
  } else {
    background(255);
  }
	fill(255);
	ellipse(mouseX, mouseY, 50, 50);
	
	fill(0);
	rect(pmouseX, pmouseY, 30, 30);
}