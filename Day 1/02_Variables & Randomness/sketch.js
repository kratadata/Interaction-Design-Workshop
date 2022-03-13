

//var and let are both used for variable declaration in javascript but the difference between them is that
//var is "function scoped" and let is "block scoped".
//It can be said that a variable declared with var is defined throughout the program as compared to let

//there is also a const variable, that once assigned cannot be changed

var int1 = 15; // an integer (int) i.e a whole number  
var int2 = 100; //an integer (int) i.e a whole number 
var float1 = 1/4; // a floating point number(float) i.e a numbers with a decimal point 
var bool1 = false; // a true or false value (bool) i.e a single bit value 
let string1 = 'Interaction Design Week'; // values that are treated as text (String)
const num = 23012;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	textSize(20);

  text("int1 is a " + typeof int1 + " and its value is " + int1, 100,100);
  text("float1 is a " + typeof float1 + " and its value is " + float1, 100,150);
  text("bool1 is a " + typeof bool1 + " and its value is " + bool1, 100,200);
  text("string1 is a " + typeof string1 + " and its value is " + string1, 100,250);
 
 // num = 19398;
}

function draw() {
	
}

function mousePressed(){
  let int3 = int1 + int2;
  let string2 = string1 + float1;
  let bool2 = !bool1;

  text("int3 is a " + typeof int3 + " and its value is " + int3, 100,300);
  text("string2 is a " + typeof string2 + " and its value is " + string2, 100,350);
  text("bool2 is a " + typeof bool2 + " and its value is " + bool2, 100,400);
}