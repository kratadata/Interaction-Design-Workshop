let r = 190;
let g = 206;
let b = 243;

function setup() {
  createCanvas(400, 400);
  background(r, g, b);
}

function draw() {
 
  if(mouseIsPressed){
    Xpos = mouseX;
    fill(255);
    ellipse(Xpos, mouseY, 50, 50);
  }
}

function mouseReleased() {

}

function mouseDragged() {
	ellipse(mouseX,mouseY,50+1,50+1)
}