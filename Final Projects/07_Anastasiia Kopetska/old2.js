let font, font2;
let points; 
let sliderSize;
let sliderMovement;
let sliderSize2;
let sliderSkip;
let colorPicker2;
let txt = 'women are not the weakest sex'
let layer1, layer2;
let clearButton;
 
function preload() { 
  font = loadFont('RobotoMono-Bold.ttf');
  font2 = loadFont('RobotoMono-Thin.ttf');
} 
 
function setup() { 
  createCanvas(windowWidth, windowHeight);
  layer1 = createGraphics(width, height);
  layer2 = createGraphics(width, height);
  
  layer1.background(158, 226, 159, 7);
  
  buttonExport = createButton('EXPORT')
  buttonExport.position(width/2,10)
  buttonExport.mousePressed(exportImage)
  
  genType('the future is female', 90);
  
  sliderSize = createSlider(50, 1000, 300, .01)
  sliderSize.position(width/2 - 30, 40)
  sliderSize.input(updateFontSize);
  
  sliderMovement = createSlider(-300, 300, 0, 1)
  sliderMovement.position(width/2 - 30, 60)
  
  colorPicker2 = createColorPicker('white');
  colorPicker2.position(width/2 + 120, 40)
  
  sliderSize2 = createSlider(1, 100, 7, .01)
  sliderSize2.position(width/2 - 30, 80)
  
  sliderSkip = createSlider(1, 10, 3)
  sliderSkip.position(width/2 - 30, 100)
  
  clearButton = createButton('clear');
  clearButton.position(width/2 - 100 , 40); 
  clearButton.mousePressed(clearLayer);
  
} 

function clearLayer(){
  layer1.clear();
  background(158, 226, 159)
}

function updateFontSize(){
   genType('the future is female', sliderSize.value());
}
 
function draw() { 
  background(158, 226, 159, 7)
  frameRate(3)
  //small background type
  //if(frameCount%20==0){
    push()
    layer1.textSize(random(3, 100));
      layer1.stroke(colorPicker2.color())
    layer1.strokeWeight(2)
      layer1.fill(158, 226, 159,0); 
      layer1.textFont(font2)
    layer1.text(txt, random(width), random(height));
    pop();
  //}
  
  push()
  layer2.reset();
  layer2.clear()
  layer2.translate(width / 2, height/2 + sliderMovement.value()); 
 
  let counter = 0;
  for(let i = 0; i < points.length; i+=sliderSkip.value()) { 
    let p = points[i];
    layer2.stroke("#9073F0")
    layer2.strokeWeight(3)
    layer2.fill(0);
    if(i > mouseX/4){
      layer2.fill(0)
    }
    
    if(counter%2 ==0){
      layer2.stroke(0);
    }
    layer2.circle(p.x, p.y, sliderSize2.value()); 
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
    sampleFactor: .7, // (default=.1), higher = more points 
    simplifyThreshold: 0 
  }); 
}

function exportImage (){
  
  save('YourPoster.png')
}