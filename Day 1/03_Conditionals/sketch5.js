
function setup() {
	createCanvas(300,200);	
}
function draw() {
	background(0);
	stroke(255);
	line(100,0,100,200);
	line(200,0,200,200);

	if (mouseX < 100){
		fill (255,0,0,100);
		ellipse (100,100,200,200);
	} else if (mouseX > 100){
		fill (0,0,255,100);
		ellipse (200,100,200,200);
	}//close if

}//close draw