let x = -150; //x position starts off screen

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //alpha between 0 and 255 , where 0 is transparent, and 255 is opaque
  background(200, 10 );
  rectMode(CENTER);
  fill(20);
  rect(x, 200, 100, 50);

  if (x >= 500) {
    //if the variable "x" is greater than 500
    x = -150; //then reset "x" to -150
  } //close if statement

  //increase x by 5 pixels every frame
  //placed outside of if{} for continuous animation
  x = x + 5; // x+= 5
  console.log(x)
} //close draw
