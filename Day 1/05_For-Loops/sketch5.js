/*
Recreate the form in assets/circles.png
The amount of circles is 50;
Set the position of of the circle to be width/2, height/2. 
Set stroke weight to 1.
Set stroke color to random. 
Try to see what happens when you remove noLoop() from the setup function. 
*/

let amountOfCircles = 50;
let xPos;
let yPos;
let diameter;
let randomColor;

function setup() {
  createCanvas(800, 800);
  background(100);
  //noLoop();

  xPos = width/2;
  yPos = height/2;
}

function draw() {
  background(55);
  noFill();

  diameter = 20;
  
  strokeWeight(1);
 
  for (let i = 0; i<= amountOfCircles; i++) {
    randomColor = color(random(255), random(255), random(255))
    stroke(randomColor)
    circle(xPos, yPos, diameter * i);
  }
 
}
