class Board {
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.cells = [[]];
    this.setup();
  }

  setup() {
    for (var row = 0; row < this.rows; row++) {
      this.cells[row] = [];
      for (var column = 0; column < this.columns; column++) {
        this.cells[row][column] = new Stack(new Cell(row, column, color(220)));
      }
    }
  }

  draw() {
    for (var row = 0; row < this.rows; row++) {
      for (var column = 0; column < this.columns; column++) {
        this.cells[row][column].top().draw();
      }
    }
  }
}
