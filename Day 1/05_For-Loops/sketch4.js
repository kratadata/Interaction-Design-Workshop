//using all the different elements you can easily create animated patterns 

var tileCount = 20;
var circleColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  circleColor = color(255, 150);
}

function draw() {
  background(0);
	
  translate(width / tileCount / 2, height / tileCount / 2);
  stroke(circleColor);
  strokeWeight(mouseY / 100);
  randomSeed(1234);
  
	
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {

      var posX = width  / tileCount * gridX;
      var posY = height / tileCount * gridY;

      var shiftX = random(-mouseX, mouseX) / tileCount ;
      var shiftY = random(-mouseX, mouseX) / tileCount ;

      ellipse(posX +shiftX, posY + shiftY, mouseY / tileCount, mouseY / tileCount);
    }
  }
}

