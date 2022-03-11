var dia = 200;

function setup (){
	createCanvas (400,400);
    noStroke();
}

function draw (){
	background (255);
	fill(251, 218, 176)
	circle(150, 150, dia);
	
	//if both conditions are met
	
	if (mouseX > 50 && mouseX < 250){
		
	//then draw the face
	fill (0);
	ellipse (110,120,25,25);
	ellipse (190,120,25,25);

	fill (255);
	ellipse (110,115,10,10);
	ellipse (190,115,10,10);

	fill (255,0,0);
	ellipse (150,200,80,20)
    } // close if

    

	
}//close draw

//use mousePresses to find exact coordinates
function mousePressed(){
	console.log("mouseX=", floor(mouseX), "mouseY=", floor(mouseY));
}