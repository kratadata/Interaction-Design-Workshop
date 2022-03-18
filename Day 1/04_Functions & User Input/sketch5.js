var offset = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
 // smiley(200 - offset, 150);


  fill(0);
  offset = mouseY / 2;
  smiley(mouseX - offset, mouseY - offset);
  smiley(mouseX - offset, mouseY + offset);
  smiley(mouseX + offset, mouseY + offset);
  smiley(mouseX + offset, mouseY - offset); 


}

function smiley(smileyX, smileyY) {
  //face
  fill(0);
  ellipse(smileyX, smileyY, 150, 150);
  // eye 1:
  fill(255);
  ellipse(smileyX - 30, smileyY - 20, 15, 15);
  // eye 2:
  ellipse(smileyX + 30, smileyY - 20, 15, 15);
  //mouth:
  stroke(255);
  strokeWeight(4);
  noFill();
  arc(smileyX, smileyY, 100, 100, radians(40), radians(140));
}
