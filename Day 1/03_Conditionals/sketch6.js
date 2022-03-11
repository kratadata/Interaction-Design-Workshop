let isCircle = true;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER)
}

function draw() {
	background(255);
	stroke(0)
	fill(0)
    
    line(150,0,150,height);
    line(250,0,250,height);

	if(mouseX > 0 && mouseX < 150) {
		circle(mouseX, mouseY, 50)
	} else  if (mouseX > 150 && mouseX < 250){
		rect(mouseX, mouseY, 50, 50)
	} else {
        triangle(mouseX, mouseY, mouseX - 40, mouseY - 40,mouseX + 40, mouseY -40 )
    }
}


