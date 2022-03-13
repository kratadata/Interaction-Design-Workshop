//Another interesting function of p5 is blendMode(), which works similarly to
//the blending modes found in Photoshop/After Effects etc.
//Here you can find all the different modes https://p5js.org/reference/#/p5/blendMode

function setup() {
	createCanvas(1200,300);
	background(0);	
	noStroke();
}

function draw() {

	//if you want to exclude the background from blending you need to 
	//call blendMode(BLEND) before calling background() function
	blendMode(BLEND);
	background(0);

	
	fill(255,0,0);
	circle(100, height/2, 100);


	fill(255,0,0);
	circle(300, height/2, 100);

	
	fill(255,0,0);
	circle(500, height/2, 100);

	
	fill(255,0,0);
	circle(700, height/2, 100);


	fill(255,0,0);
	circle(900, height/2, 100);

	
	fill(255,0,0);
	stroke(100)
	circle(1100, height/2, 100);

	if (mouseX > 0 && mouseX < 200){
		blendMode(ADD);
	} else if (mouseX > 200 && mouseX < 400) {
		blendMode(LIGHTEST);
	} else if (mouseX > 400 && mouseX < 600) {
		blendMode(DIFFERENCE);
	} else if (mouseX > 600 && mouseX < 800) {
		blendMode(MULTIPLY);
	} else if (mouseX > 800 && mouseX < 1000) {
		blendMode(OVERLAY);
	}else {
		blendMode(DODGE);
	}	

	
	fill(0,0,255);
	circle(mouseX, mouseY + 20, 100)
	fill(0,255,0);
	circle(mouseX , mouseY - 20, 100)
}

