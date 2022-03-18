let a = 0.0;
let s = 0.0;

let rgbSlider = 0;
let bgColor
let dayNight;
let drawRectangles = false;
let rgbColor;

function setup() {
  createCanvas(1000, 1000);
   noStroke();
   rectMode(CENTER);
  //
  
  rgbSlider = createSlider(0, 255, 100);
  rgbSlider.position(100,100)
  
  bgColor = color(208, 247, 241)

  dayNight = 090878575
}

function draw() {
  background(bgColor);
  randomSeed(dayNight)
  rgbColor = rgbSlider.value()
  rgbColor = color(random(rgbColor), random(rgbColor), random(rgbColor))
  
  serialWriteRGB(random(rgbColor), random(rgbColor), random(rgbColor))

  a = a + 0.01;
  s = cos(a) + 1;

  //
  translate(width/2 , height/2 );
  scale(s);

 

  //
  if (!drawRectangles) {

    fill(255);
    circle(0, 0, 50, 50);
  
  
    //
    fill(rgbColor);
    
    circle(55, 55, 50, 50);
  
  
    //
    fill(rgbColor);
    
    circle(110, 110, 50, 50);
  
  
     //
    fill(rgbColor);
  
    circle(-55, -55, 50, 50);
  
    //
    
    fill(rgbColor);
  
    circle(-110, -110, 50, 50);
  
  

  } else {
    rectangles();
  }

  if (lightMeasure == 0) {
    bgColor = color(35, 12, 64)
    dayNight = 46813524
  } else {
    bgColor = color(208, 247, 241)
    dayNight =  090878575

  }
   if (buttonClick == 1) {
     drawRectangles = true;
  } else {
    drawRectangles = false;
  

  }
}


function rectangles () {
  
  fill(255);
 
  rect(0, 0, 50, 50);


  //
  fill(rgbColor);
  
  rect(55, 55, 50, 50);


  //
  fill(rgbColor);
  
  rect(110, 110, 50, 50);


   //
  fill(rgbColor);

  rect(-55, -55, 50, 50);

  //
  
  fill(rgbColor);

  rect(-110, -110, 50, 50);


}

 
  





