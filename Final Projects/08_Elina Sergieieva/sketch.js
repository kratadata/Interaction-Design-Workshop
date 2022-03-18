let width
let height
let angle= 0;
let changeBlend = 0;
let amountOfCircles = 30;
let diameter = 10;
let color;
let disco = 0
function setup() {
  createCanvas(1000, 1000);
  background(55);

}

function draw() {
  blendMode(BLEND)
  background(disco);

  if (buttonClick == 1){
    changeBlend++ 
  } else {
    changeBlend++ 
  }



  if (changeBlend == 0){
    blendMode(BLEND)
  }else if (changeBlend == 1){
    blendMode(LIGHTEST)
    }else if (changeBlend == 2){
    blendMode(SCREEN)
  }else if (changeBlend == 3){
    blendMode(DIFFERENCE)
  }else if (changeBlend == 4){
    blendMode(ADD)
  }else {
    changeBlend = 0
}

  
  //shape 1
  potentiometer = map(potentiometer, 0, 1023, 0, 300)
   
  noStroke();
  fill(77, 77, 255);
  
  flower();
  translate(500, 500);
  
  
  fill(224,231,34);
  noStroke();
  star(-100, - 350, 60, 140, 5);

  //shape 3 triangle
  fill(255,20,147);
  noStroke();
  triangle (100, 200, 50,400, 250, 400);

  // shape 4 circle
  noFill();
  for(let i=0; i <= amountOfCircles; i++){
    stroke(68,214,44);
    strokeWeight(2);

    circle(-300, 100, diameter* (i+1));
  }
  

  //shape 5
  fill(255,173,0);
  noStroke();
  rect(250,-150,200);

  if(lightMeasure == 0){
    disco = color(random(255), random(255), random(255))
    serialWriteRGB(random(255), random(255), random(255))
  }else {
    disco = 0
    serialWriteRGB(0,0,0)
  }

  
}


function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}


function flower() {
  //translate(mouseX, mouseY)
  push()
  translate(500,500)
  rotate (angle)
  for (let i = 0; i < 10; i ++) {
    ellipse(potentiometer, potentiometer+5, 100, 300);
    rotate(PI/5);
  }
  pop()
  angle+=0.01
}

