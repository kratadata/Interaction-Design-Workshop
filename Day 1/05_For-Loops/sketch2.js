// with a for..lop you can easily create 10 circles at once!

let randomPosX;
let randomPosY;
let randomColor;
let randomDiameter;

function setup() {
	createCanvas(800,800);
	background(255);
	frameRate(60);
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
	
	fill(randomColor);
	for (let i = 0; i <= 10; i++) {
		//first time I am in the loop i = 0
			//second time I am in the loop i = 1
				//third time I am in the loop i = 2
					//fourth time I am in the loop i = 3
					 	//fifth time I am in the loop i = 4
							//...
								//tenth time i = 9
									//eleventh time i = 10
			circle(randomPosX, randomPosY, randomDiameter);
			console.log("the value of i " + i)
	}
}

function mousePressed() {
	clear();
}