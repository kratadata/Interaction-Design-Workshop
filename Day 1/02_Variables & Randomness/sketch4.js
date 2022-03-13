/*The random function gives you a random value between two parameters.
By default, random() produces different results each time the program is run. 
randomSeed(number) forces random function to return the same pseudo-random numbers each time the software is run.
*/

let circleX;
let circleY;
let circleDiameter;
let width = 500;
let height = 400;
let aColo, bColor, cColor;

function setup() {
  createCanvas(width, height);
  noStroke()

  circleX = random(0, width);
  circleY = random(0, height);
  circleDiameter = random(50,100);
  aColor = color(random(255), random(255), random(255));
  bColor = color(random(255), random(255), random(255));
  cColor = color(random(255), random(255), random(255));
  
}

function draw() {
    
//randomSeed(132914)

//notice the difference if behaviour if random is called inside of draw!
/*
circleX = random(0, width);
circleY = random(0, height);
circleDiameter = random(50,100);
aColor = color(random(255), random(255), random(255));
bColor = color(random(255), random(255), random(255));
cColor = color(random(255), random(255), random(255));
*/


  background(255);
  fill(aColor);
  circle(circleX, circleY, circleDiameter);
  fill(bColor);
  circle(circleX, circleY, circleDiameter/2);
  fill(cColor);
  circle(circleX, circleY, circleDiameter/4);
  
}
