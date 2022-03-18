function setup() {
  createCanvas(710, 400);
  background(102);
}

function draw() {
  stroke(255);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
function keyPressed(){
  if(key =="c"){
    fill(102);
    rect(107,400);
  }
}