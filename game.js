let x = 300;
let y = 100;
let state = "start";
let fallVelocity = 1;
let thrustVelocity = 1.2;
let acceleration = 0.5;

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

  switch (state) {
    case "start":
      textSize(48);
      text(`Press 'W' to thrust`, 100, 200);
      if (keyIsDown(87)) state = "playing";
      break;
    case "playing":
      frog(x, y);
      console.log(keyIsDown(87));
      y += fallVelocity;
      fallVelocity += acceleration;

      if (keyIsDown(87)) {
        y -= thrustVelocity;
        fallVelocity -= thrustVelocity;
      }

      if (y > 560 && fallVelocity > 10) state = "fail";
      if (y > 560 && fallVelocity <= 10) state = "win";

      break;
    case "fail":
      textSize(24);
      text(`Landed too hard, your legs are broken`, 100, 200);
      text(`Press 'Enter' to restart`, 100, 250);
      frog(x, y);

      if (keyIsDown(13)) {
        y = 100;
        fallVelocity = 1;
        thrustVelocity = 1.2;
        state = "playing";
      }
      break;
    case "win":
      textSize(24);
      text(`Landed successfully`, 100, 200);
      text(`Press 'Enter' to play again`, 100, 250);
      frog(x, y);

      if (keyIsDown(13)) {
        y = 100;
        fallVelocity = 1;
        thrustVelocity = 1.2;
        state = "playing";
      }
      break;
  }
}
