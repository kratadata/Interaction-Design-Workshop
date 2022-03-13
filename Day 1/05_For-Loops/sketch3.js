//Imagine you want to create a grid of circles that will be repeated
//both in the width and in the height. 

let randomDiameter;

function setup() {
	createCanvas(windowWidth, windowHeight);
	   background(0);
  }
  
  function draw() {
	stroke(255);
	randomDiameter = random(10, 30);
  

	//you can do that using nested for..loop. 
	//by first iterating through the width of your canvas
	for (let circleX = 50; circleX <= windowWidth - 50; circleX += 50) {
		//and the height (or the other way around!)
		for (let circleY = 50; circleY <= windowHeight - 50; circleY += 50) {
			circle(circleX, circleY, randomDiameter);
		  }
	}
	  
	  
  }
  
  