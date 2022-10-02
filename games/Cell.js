class Cell {
  constructor(row, column, color) {
    this.row = row;
    this.column = column;
    this.color = color;
  }

  draw() {
    stroke(10);
    fill(color(100, 100, 100));

    const size = 50;

    rect(this.column * size, this.row * size, 50, 50);
  }
}
