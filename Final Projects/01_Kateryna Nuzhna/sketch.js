
let xspacing = 16; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 75.0; // Height of wave
let period = 500.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave
var x = 200;
var y = 200;
var r = 50;
var smileAngle = 0.6;
var smileValue = 0;
var startSmile = 0.1;
var endSmile = 0.9;
var faceColor;
var warning;
let showImage = false;




function preload () {
  warning = loadImage("images.png")
}

function setup() {
  createCanvas(1000, 1000);
  w = width + 16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
  faceColor = color(238, 217, 225)

  serialSetup();
}


function draw() {
  background(225);
  noStroke();
  fill(241, 133, 210);
  rect(0, 0, 1000, 400);
  noStroke();
  fill(133, 149, 232);
  rect(0, 400, 1000, 1000);

  happyFace(width / 1.5, height / 4, 180);
  happyFace(width / 4, height / 4, 180);
  calcWave();
  renderWave();

  
  amplitude = map(potentiometer, 0, 1023, 50, 150 )

  if (showImage){
    console.log("true")
    image(warning, width/2, height/2);
  }


  if (buttonClick == 0){
    //change happy to sad
    smileValue = 40
    smileAngle = 0.4
    startSmile = 0.9;
    endSmile = 0.1;
    faceColor = color(238, 217, 225)
  }else {
    //change sad to happy
    smileValue = 0
    smileAngle = 0.6
    startSmile = 0.1;
    endSmile = 0.9;
    faceColor = color(86, 53, 89);
  }
  if (lightMeasure == 0){
    showImage = true;
  } else {
    showImage = false;
  }



}

function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.02;
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }


}

function happyFace(x, y, diam) {

  // Face

  stroke(0);
  strokeWeight(2);

  if (dist(x, y, mouseX, mouseY) < r) { 
    let r = random(200)
    let b = random(210)
    let g = random(210)
    fill(r,b,g);
    serialWriteRGB(r,b,g)
   }
  else { fill(faceColor); }

  ellipse(x, y, diam, diam, r * 2, r * 2);

  // Smile
  // values  + 40 and 0.4
  var startAng = startSmile * PI
  var endAng = endSmile * PI
  var smileDiam = smileAngle * diam;
  arc(x, y + smileValue, smileDiam, smileDiam, startAng, endAng);


  // Eyes
  var offset = .1 * diam;
  var eyeDiam = .1 * diam;
  fill(0);
  ellipse(x - offset, y - offset - 5, eyeDiam, eyeDiam,);
  ellipse(x + offset, y - offset - 5, eyeDiam, eyeDiam);

}


function renderWave() {
  noStroke();
  fill(175, 233, 255);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, height / 2 + yvalues[x], 16, 16);
  }
}

