var hrs, sec, min, hrsAngle, secAngle, minAngle;
function setup() {
  createCanvas(400,400);
}

function draw() {
  background("black");

  hrs= 45;
  sec= second();
  min= minute();

  angleMode(DEGREES);
  secAngle=map(sec, 0, 60, 0, 360);
  hrsAngle=map(hrs, 0, 89, 0, 360);
  minAngle=map(min, 0, 60, 0, 360);

  drawSprites();
  seconds();
  minutes();
  hours();
}

function seconds() {
  push();
  rotate(secAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
}

function minutes() {
  push();
  rotate(minAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();
}

function hours() {
  push();
  rotate(hrsAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();
}