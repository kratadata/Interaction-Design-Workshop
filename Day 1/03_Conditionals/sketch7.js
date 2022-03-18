
let dia = 50;
let middle;
//recreate the drawing found in assets/conditionalPosition.gif

function setup() {
	createCanvas(500, 500);
	background(0);
	stroke(255);
	middle = height/2;
	rectMode(CENTER);	
  }
  
  function draw() {
	background(0);
	strokeWeight(1);
	
	//help lines
	line(100, 0, 100, height);
	line(200, 0, 200, height);
	line(300, 0, 300, height);
	line(400, 0, 400, height);

	fill(255);

	if(mouseX >= 0 && mouseX <= 100){
		circle( 50, middle, dia)
	}else if(mouseX > 100 && mouseX <= 200) {
		square(150, middle, dia)
	}else if(mouseX > 200 && mouseX <= 300) {
		circle(250, middle, dia ) 
	}else if (mouseX > 300 && mouseX <= 400) {
		square(350, middle, dia ) 
	}else {
		circle(450, middle, dia ) 
	}

  }
  