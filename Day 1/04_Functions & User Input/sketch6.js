//create a little forest using your own function !
//reference image in assets/forest.png

let trunk1, trunk2, trunk3, trunk4, trunk5;
let leaves1, leaves2, leaves3, leaves4, leaves5;


function setup() {
  createCanvas(600, 600);
  noStroke();

  trunk1 = color(random(255), random(255), random(255));
  trunk2 = color(random(255), random(255), random(255));
  trunk3 = color(random(255), random(255), random(255));
  trunk4 = color(random(255), random(255), random(255));
  trunk5 = color(random(255), random(255), random(255));

  leaves1 = color(random(255), random(255), random(255));
  leaves2 = color(random(255), random(255), random(255));
  leaves3 = color(random(255), random(255), random(255));
  leaves4 = color(random(255), random(255), random(255));
  leaves5 = color(random(255), random(255), random(255));

  frameRate(10)
}

function draw() {
  background(41, 169, 255) //sky
/* 
  trunk1 = color(random(255), random(255), random(255));
  trunk2 = color(random(255), random(255), random(255));
  trunk3 = color(random(255), random(255), random(255));
  trunk4 = color(random(255), random(255), random(255));
  trunk5 = color(random(255), random(255), random(255));

  leaves1 = color(random(255), random(255), random(255));
  leaves2 = color(random(255), random(255), random(255));
  leaves3 = color(random(255), random(255), random(255));
  leaves4 = color(random(255), random(255), random(255));
  leaves5 = color(random(255), random(255), random(255));
   */
  fill(60, 145, 100); // grass
  rect(0, 300, width, height - 30);//grass


   tree(100, 280, trunk1, leaves1, true)
   tree(200, 300, trunk2, leaves2, true)
   tree(300, 320, trunk3, leaves3, false)
   tree(400, 260, trunk4, leaves4, true)
   tree(500, 310, trunk5, leaves5, false)
}  

function tree(x, y, trunkColor, leavesColor, hasApples) {
 
  fill(trunkColor)
  rect(x - 25, y + 30, 50, 100)

  fill(leavesColor)
  circle (x, y, 100)

  if(hasApples){
    fill(255,0,0)
    circle(x, y + 30, 30)
  } else {
    fill(155,0,200)
    circle(x, y + 30, 30)
  }

}
