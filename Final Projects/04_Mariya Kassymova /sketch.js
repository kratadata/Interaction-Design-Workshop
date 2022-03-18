var s = 200;
var redValue = 255;
var greenValue = 0;
var blueValue = 0;
var pulse = false;
var pulseS = 1;


function setup() {
  createCanvas(1000, 1000);
  smooth();
  noStroke();
  frameRate(10)
}



function draw() {
  background(0);
  

  redValue = map(potentiometer, 0, 1023, 0, 255)
  greenValue = map(potentiometer, 0,  1023, 0, 28)
  blueValue = map(potentiometer, 0,  1023, 0, 100)

  fill(redValue, greenValue,blueValue);
  serialWriteRGB(redValue, greenValue,blueValue)

  
  for (x = 0; x < width; x += s) {
    for (y = 0; y < height; y += s) {
             
      push()
      translate(x+s/2, y+s/2)
      if(pulse){
        pulseS = map(sin(frameCount % 60), -1, 1, 0.5, 1)
        console.log(pulseS)
        scale(pulseS)
      }else {
        scale(1)
      }
      
 
      heart(0,0, s/2);
      pop()

    }
  }

  if (buttonClicked == 1){
    s = 100
  }else{
    s = 200
  }

  if (lightMeasure == 0){
     pulse = true;
  }else {
    pulse = false;
  }

}


function heart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
  
}
