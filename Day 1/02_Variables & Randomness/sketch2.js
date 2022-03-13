

// variables can be converted into other types of variables

var int1 = 15; 
var int2 = 20;
var float1 = 1/4; 

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	textSize(20);

  // converting to string
  int1 = int1.toString();

  //converting to int
  float1 = parseInt(float1);

  //converting to float variable.toFixed(number of digits after a point)
  //here a variable is created and defined directly in the setup function
  let int3 = int2.toFixed(2);


  text("int1 is a " + typeof int1 + " and its value is " + int1, 100,100);
  text("float1 is a " + typeof float1 + " and its value is " + float1, 100,150);
  text("int3 is a " + typeof int3 + " and its value is " + int3, 100,200);

}

function draw() {
  //uncomment this to see what happens
  //console.log(int3)

  

}
