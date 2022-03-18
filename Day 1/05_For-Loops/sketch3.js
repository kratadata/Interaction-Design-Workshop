//Imagine you want to create a grid of circles that will be repeated
//both in the width and in the height. 

let randomDiameter;

function setup() {
	createCanvas(windowWidth, windowHeight);
	   background(0);
  }
  
  function draw() {
	background(0)
	stroke(255,0,0);
	randomDiameter = random(10, 30);
    randomSeed(233432)
	//you can do that using nested for..loop. 
	//by first iterating through the width of your canvas
	for (let circleX = 50; circleX <= windowWidth - 50; circleX += 50) {
		//and the height (or the other way around!)
		for (let circleY = 50; circleY <= windowHeight - 50; circleY += 50) {
			fill(random(255))
			strokeWeight(circleX/100)
			circle(circleX, circleY, circleY/30);
		  }
	}
	  
	  
  }
  
  