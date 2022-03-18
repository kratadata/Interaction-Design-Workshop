let circleX = 300, circleY = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (keyIsPressed) {
    if (key === "r") {
      background(255, 0, 0);
    } else if (key === "g") {
      background(0, 255, 0);
    } else if (key === "b") {
      background(0, 0, 255);
    }
  } else {
    background(0, 10);
  } 


    if(keyIsDown(UP_ARROW)) {
      circleY--;
    }else if(keyIsDown(DOWN_ARROW)){
      circleY ++;
    }else if (keyIsDown(LEFT_ARROW)){
      circleX--;
    } else if (keyIsDown(RIGHT_ARROW)){
      circleX++;
    }

    /* if (keyCode === UP_ARROW) {
      circleY--;
    } else if (keyCode === DOWN_ARROW) {
      circleY++;
    } else if (keyCode === LEFT_ARROW) {
      circleX--;
    } else if (keyCode === RIGHT_ARROW) {
      circleX++;
    } */
  

  fill(255)
  ellipse(circleX, circleY, 100, 100);
}


