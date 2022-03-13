/*
You can also vary the behavior based on a different conditionals.
In the example to the right, the if statement uses the mouse position
to determine the color of the rectangles.
*/


let xPos = 0;

function setup(){
	createCanvas(800,800);	
	rectMode(CENTER);
	noStroke();
}

function draw(){
	background(150);
	

  for (let x = 0; x < width; x+=50) {
    xPos = x;

		if(mouseX > xPos){
			fill(60);
		} else {
			fill(200);	
		}
		rect(x, height/2, 25, height);
  }
}