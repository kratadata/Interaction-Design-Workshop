/*The random function gives you a random value between two parameters.
Since random is a function it cannot be used outside of "function scope"
By default, random() produces different results each time the program is run. 
randomSeed(number)forces random functionto return the same pseudo-random numbers 
each time the software is run.
*/

let circleX;
let circleY;
let circleDiameter;
let width = 500;
let height = 400;


function setup() {
  createCanvas(width, height);
  noStroke()

  circleX = random(0, width);
  circleY = random(0, height);
  circleDiameter = random(50,100);
  
}

function draw() {
    
//randomSeed(132914)

/*
circleX = random(0, width);
circleY = random(0, height);
circleDiameter = random(50,100);
*/


  background(255);
  fill(255,0,0)
  circle(circleX, circleY, circleDiameter);
  fill(255,255,0)
  circle(circleX, circleY, circleDiameter/2);
  fill(0,255,0)
  circle(circleX, circleY, circleDiameter/4);
  
}
