function setup() {
	createCanvas(400,400);
	
}
function draw() {
	background(225);
	fill(100);
	line (width/2,height,width/2,0);
	
	//if the mouse is on the right side of the sketch...
	if (mouseX < width/2){
	  //then execute this code
	  fill(255);
	  ellipse(width/2, height/2, 100,100);
  } //close if statement

}//close draw