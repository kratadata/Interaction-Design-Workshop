let xPos; 
let randomCol;
let fillColor;

function setup() {
  createCanvas(400, 400);
  background(100);

  randomCol = color(255, 255,255);
  fillColor = 255;
}

function draw() {
  background(randomCol);
  if(mouseIsPressed){
    xPos = mouseX;
    fill(fillColor)
    circle(xPos, mouseY, 50)
  }else {
    xPos++;
  }
  
  if(keyIsPressed){
    if (key == "w" ) {
      fillColor = color(random(255), random(255), random(255),random(255));
    }
  }
}

function mousePressed() {
 
}

function mouseReleased() {
   square(mouseX, mouseY, 50 )
}

function mouseDragged() {
  randomCol = color(random(255), random(255), random(255),random(255));
}