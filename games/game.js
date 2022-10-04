function setup() {
  var cnv = createCanvas(1000, 600);
  var x = (windowWidth - width) / 2;
  var y = 50;
  cnv.position(x, y);

  board = new Board(12, 20);

  grid = new Grid(12, 20);
}

function draw() {
  background(255);
  board.draw();
  grid.draw();
}
