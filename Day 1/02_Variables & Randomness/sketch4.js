/*The random function gives you a random value between two parameters.
By default, random() produces different results each time the program is run. 
randomSeed(number) forces random function to return the same pseudo-random numbers each time the software is run.
*/

let circleX;
let circleY;
let circleDiameter;
let width = 500;
let height = 400;
let aColor, bColor, cColor;

let pinkColor;
let blueColor;
let greenColor;
let randomBetween;

function setup() {
  createCanvas(width, height);
  noStroke()

  circleX = random(0, width);
  circleY = random(0, height);
  circleDiameter = random(50,100);
  aColor = color(random(255), random(255), random(255));
  bColor = color(random(255), random(255), random(255));
  cColor = color(random(255), random(255), random(255));
  

  pinkColor = color(255, 20, 30);
  blueColor = color(7, 29, 89)
  greenColor = color(83, 191, 50);
}

function draw() {
    
randomSeed(8435754394)

//notice the difference if behaviour if random is called inside of draw!

circleX = random(0, width);
circleY = random(0, height);
circleDiameter = random(50,100);
aColor = color(random(255), random(255), random(255));

bColor = color(random(255), random(255), random(255));
cColor = color(random(255), random(255), random(255));



  background(255);
  fill(aColor);
  circle(circleX, circleY, circleDiameter);
  fill(bColor);
  circle(circleX, circleY, circleDiameter/2);
  fill(cColor);
  circle(circleX, circleY, circleDiameter/4);
  
}
