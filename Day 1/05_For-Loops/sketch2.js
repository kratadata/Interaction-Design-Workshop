// with a for..lop you can easily create 10 circles at once!

let randomPosX;
let randomPosY;
let randomColor;
let randomDiameter;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	frameRate(10);
	noStroke();
	
}

function draw() {
	
	randomPosX = random(0, width);
	randomPosY = random(0, height);
	randomDiameter = random(50, 100);
	randomColor = color(random(255), random(255), random(255));
	
	// i is a loop variable with a starting value of 0, this variable is
	// increased by 1 (i++) each time the for-loop is executed, which happens
	// as long as i is smaller or equal 10
	
	for (let i = 0; i <= 10; i++) {
			circle(randomPosX, randomPosY, randomDiameter);
	}
}

function mousePressed() {
	clear();
}