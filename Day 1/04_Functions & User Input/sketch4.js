let circleX,
  circleY = 200;

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
    background(0);

    if (keyCode === UP_ARROW) {
      circleY--;
    } else if (keyCode === DOWN_ARROW) {
      circleY++;
    } else if (keyCode === LEFT_ARROW) {
      circleX--;
    } else if (keyCode === RIGHT_ARROW) {
      circleX++;
    }
  }

  ellipse(circleX, circleY, 100, 100);
}
