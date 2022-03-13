/*
Imagine creating a sketch with 10 circles per frame that have different colors,
diameter and are place at random position on the canvas. So far you would to it
manually, creating many lines of code to create such program.
*/

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
	
	fill(randomColor);
	circle(randomPosX, randomPosY, randomDiameter);
	circle(randomPosX, randomPosY, randomDiameter);
	circle(randomPosX, randomPosY, randomDiameter);
	circle(randomPosX, randomPosY, randomDiameter);
	circle(randomPosX, randomPosY, randomDiameter);
	circle(randomPosX, randomPosY, randomDiameter);
	circle(randomPosX, randomPosY, randomDiameter);
	circle(randomPosX, randomPosY, randomDiameter);
	circle(randomPosX, randomPosY, randomDiameter);
	circle(randomPosX, randomPosY, randomDiameter);
	circle(randomPosX, randomPosY, randomDiameter);

}

function mousePressed() {
	clear();
}