// You can use the variables just like you would use any values.
// Thi means you can use variables as arguments!


let circleX = 150;
let circleY = 200;
let circleDiameter = 100;

function setup() {
  createCanvas(400, 400);
  noStroke()
}

function draw() {
  background(255);
  fill(255,0,0)
  circle(circleX, circleY, circleDiameter);
  fill(255,255,0)
  circle(circleX, circleY, circleDiameter/2);
  fill(0,255,0)
  circle(circleX, circleY, circleDiameter/4);
  
  //uncomment the lines one by one 
  
  //circleX++
  //circleY--
  //circleDiameter = frameCount % 60;
  
}


