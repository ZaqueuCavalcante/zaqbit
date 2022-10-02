function setup() {
  var cnv = createCanvas(1000, 600);
  var x = (windowWidth - width) / 2;
  var y = 50;
  cnv.position(x, y);

  cell = new Cell(2, 2, 0);
  grid = new Grid(12, 20);
}

function draw() {
  background(230);
  cell.draw();
  grid.draw();
}
