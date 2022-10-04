class Cell {
  constructor(row, column, color) {
    this.row = row;
    this.column = column;
    this.color = color;
  }

  draw() {
    stroke(10);
    fill(this.color);

    const size = 50;

    rect(this.column * size, this.row * size, size, size);
  }
}
