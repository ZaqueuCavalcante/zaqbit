import P5 from "p5";

function setup() {
  var cnv = P5.createCanvas(1000, 600);
  var x = (P5.windowWidth - P5.width) / 2;
  var y = 50;
  cnv.position(x, y);
}

function draw() {
  P5.background(200);
}
