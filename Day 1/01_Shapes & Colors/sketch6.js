//While it's common to define colours with a 24bit RGB value (Red, Green, Blue), 
//there are some other alternatives to working with colour. In HSB mode, 
//we set the Hue, Saturation, and Balance. This is also known as HSV (See assets/HSV.png).

//HUE is typically selected with 0 to 360 degrees, with saturation 0-100 
//and brightness 0-100. This can differ somewhat between programming languages.
//We can change the colour mode with the following command: colorMode(HSB)

var r1,r2;

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB);
	background(0);
	noStroke();
	r1 = random(20,100);
	r2 = random(20,100);
}

function draw() {
	background(0,0,0,0.01);
	myShape(mouseX, mouseY, r1, myHueAngle());
}

function myHueAngle() {
	var myHue = frameCount % 360; 
	return myHue;
}

function mousePressed() {
	r1 = random(20,100);
	r2 = random(20,100);
}

function myShape(x, y, radius, hue) {
	fill(hue, 100,100);
	ellipse(x,y,radius);
}
