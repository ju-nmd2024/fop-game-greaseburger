let xPos = 300;
let yPos = 100;
let state = "start";
let fallVelocity = 1;
let thrustVelocity = 1.2;
let acceleration = 0.5;

//keycodes
const W = 87;
const ENTER = 13;

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

function menuText() {
  if (state === "playing") return;
  textSize(state === "start" ? 48 : 24);
  if (state === "start") text(`Press 'W' to thrust`, 100, 200);
  else {
    text(
      `Landed ${
        state === "win" ? "successfully" : "too hard, your legs are broken"
      }`,
      100,
      200
    );
    text(
      `Press 'Enter' to ${state === "win" ? "play again" : "restart"}`,
      100,
      250
    );
  }
}

function draw() {
  clear();
  background("white");
  menuText();
  if (state !== "start") frog(xPos, yPos);

  if (state === "start" && keyIsDown(W)) state = "playing";

  if (state === "playing") {
    yPos += fallVelocity;
    fallVelocity += acceleration;

    if (keyIsDown(W)) {
      yPos -= thrustVelocity;
      fallVelocity -= thrustVelocity;
    }
    if (yPos > 560) state = fallVelocity > 10 ? "fail" : "win";
  }

  if (keyIsDown(ENTER) && (state === "fail" || state === "win")) {
    yPos = 100;
    fallVelocity = 1;
    thrustVelocity = 1.2;
    state = "start";
  }
}
