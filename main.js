

function setup() {
  var cnv = createCanvas(1000, 600);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function draw() {
  background(230);
  drawByte(100, 100, "00000011");
}

function drawBit(x, y, bit) {
  stroke(10);
  fill(color(200, 200, 200));
  square(x, y, 50);
  textSize(30);
  textAlign(CENTER);
  fill(0, 0, 0);
  text(bit, x + 25, y + 35);
}

function drawByte(x, y, bits) {
  for (let index = 0; index < 8; index++) {
    drawBit(x, y, bits[index]);
    x += 50;
  }
}
