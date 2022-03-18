let x
let y
let lineColor = 0
let bgColor = 255;
let amountOfPresses = 0;
let upDown = false;

function setup() {
  createCanvas(windowWidth, windowHeight);

  x = width / 2;
  y = height / 2;
}

function draw() {
  background(bgColor, 5);
  noStroke();


  fill(lineColor);

  x = map(potentiometer, 0, 1023, 0, width)
  y = map(potentiometer, 0, 1023, 0, height);
  
  circle(x, y, 3);

   //Photometer
  if (lightMeasure ==  255) {
    bgColor = 255;
    lineColor = 0;
  } else {
    bgColor = 255;
    lineColor = 0;
  }
   

  //Potentionmeter
    if (buttonClick == 1) {
      y--;
    } else {
      x--;
  }


    if (buttonClick == 1) {
      y++;
    } else {
      x++;
    }


  
    for (let i = 0; i <= 8; i++) {
      fill(color(random(250),random(150),random(150)));
      serialWriteRGB(random(250),random(150),random(150));
      circle(20*(i+1),10,20);
    }
}


function keyPressed() {

  //spacebar
  if (key == " ") {
    console.log("cleared")
    clear();
    //serial.
    // Flash LED when clearing
  }


}

