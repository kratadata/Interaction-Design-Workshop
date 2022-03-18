var col= 100;
var c= 80;
var d= 100;


function setup() {
 
  
  
  createCanvas(400, 200);
  
}

function draw() {
 
  col,c,d = mouseX/3;
  background (col,c,d);
  fill (250,188, 222);
  ellipse (mouseX, mouseY, 64, 64);
}
  