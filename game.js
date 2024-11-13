let x = 300;
let y = 200;

let state = "start";

let velocityY = 0.2;
let acceleration = 0.2;

function setup() {
  createCanvas(600, 800);
  angleMode(DEGREES);
}

function frog(x, y) {
  translate(x, y);
  fill("green");
  //feet
  push();
  translate(30, 75);
  triangle(0, 0, 100, 0, 50, 30);
  pop();
  push();
  translate(-30, 75);
  triangle(0, 0, -100, 0, -50, 30);
  pop();
  //legs
  push();
  translate(90, 35);
  rotate(50);
  ellipse(0, 0, 60, 120);
  pop();
  push();
  translate(-90, 35);
  rotate(-50);
  ellipse(0, 0, 60, 120);
  pop();
  //body
  ellipse(0, 0, 150, 200);

  //eyes
  fill("white");
  ellipse(60, -80, 70, 70);
  ellipse(-60, -80, 70, 70);
  fill("black");
  ellipse(60, -80, 50, 15);
  ellipse(-60, -80, 50, 15);
  //mouth
  push();
  noFill();
  strokeWeight(2);
  arc(0, -50, 70, 60, 40, 140);
  pop();
}

function draw() {
  clear();
  background("white");
  frog(x, y);

  // if (state === "playing") {
  // frog(x, y);
  //   y = y + velocityY;
  //   velocityY = velocityY + acceleration;
  // }
}
