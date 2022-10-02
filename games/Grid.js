class Grid {
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.showIndexes = true;
  }

  draw() {
    stroke(10);
    fill(color(0, 0, 0));

    const size = 50;

    for (var row = 0; row < this.rows + 1; row++) {
      line(0, row * size, this.columns * size, row * size);
    }

    for (var column = 0; column < this.columns + 1; column++) {
      line(column * size, 0, column * size, this.rows * size);
    }

    if (this.showIndexes) {
      textSize(25);
      textAlign(CENTER);
      for (var row = 0; row < this.columns; row++) {
        text(row, 25 + row * size, 35);
      }
      for (var column = 0; column < this.rows; column++) {
        text(column, 25, 35 + column * size);
      }
    }
  }
}
