let xPos;
let yPos;
let randomColor;
var circleDia;

let sliderMovement;
let sliderSize;
let clearButton;

let font, font2;
let points; 
let txt = 'more than human?'

function preload() { 
  font = loadFont('RobotoMono-Bold.ttf');
  font2 = loadFont('RobotoMono-Thin.ttf');
} 

function setup() {
  createCanvas(1000, 1000);
  layer1 = createGraphics(width, height);
  layer2 = createGraphics(width, height);
  frameRate(5);
  noStroke();
/* 
  sliderMovement = createSlider(0, 500, 100);
  sliderMovement.position(420, 60);
  sliderMovement.style('width', '80px'); */


  genType('more than human?', 90);
/*   
  sliderSize = createSlider(0, 255, 100);
  sliderSize.position(420, 80);
  sliderSize.style('width', '80px');
  sliderSize.input(updateFontSize); */
/* 
  clearButton = createButton('clear');
  clearButton.position(width/2 - 150 , 65); 
  clearButton.mousePressed(clearLayer);
 */
}

function clearLayer(){
  layer1.clear();
  background(152, 182, 227)
}

function draw() {
  background(152, 182, 227);

  xPos = random(0, width);
  yPos = random(0, height);

  circleDia = random(3, 300);

  randomColor =  color ("#F66251");
  randomColor2 =  color ("#F66251");

  

  fill(randomColor);
  circle(xPos, yPos, circleDia);

  if (lightMeasure == 255){
    clearLayer()
  }

  if (buttonClick == 1) {
    updateFontSize()
    serialWriteRGB(randomColor)
  } else if(buttonClick == 0) {
    updateFontSize()
    serialWriteRGB(randomColor2)
  }

  potentiometer = map(potentiometer, 0, 1023, 0, 500)

  push()
  layer1.textSize(random(3, 50));
  layer1.stroke("#244678")
  layer1.strokeWeight(2)
    layer1.fill(158, 226, 159,0); 
    layer1.textFont(font2)
  layer1.text(txt, random(width), random(height));
  pop();
//}

push()

layer2.reset();
layer2.clear()
layer2.translate(width/2, 200 + potentiometer); 

let counter = 0;
for(let i = 0; i < points.length; i+=2,5) { 
  let p = points[i];
  layer2.stroke("#F66251")
  layer2.strokeWeight(3)
  layer2.fill(0);
  if(i > mouseX/4){
    layer2.fill(0)
  }
  
  if(counter%2 ==0){
    layer2.stroke(0);
  }
  layer2.circle(p.x, p.y, potentiometer/10); 
  counter++;
} 
pop()

image(layer1, 0, 0)
image(layer2, 0, 0)

}

function genType(txtString, txtSize) { 
  // grab bounding box of text 
  let bounds = font.textBounds(txtString, 0, 0, txtSize); 
 
  // textToPoints(txt, x, y, size, options) 
  points = font.textToPoints(txtString, -bounds.w / 2, bounds.h / 2, txtSize, { 
    sampleFactor: .5, // (default=.1), higher = more points 
    simplifyThreshold: 0 
  }); 
}

function updateFontSize(){
    genType('more than human?', buttonClicked * random(100,500));
}
