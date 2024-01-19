// Computes the next cell to spawn a new number at
class NewCellComputer {

   constructor(grid) {
      this.grid = grid;
   }

   // Returns a cell if there are empty cells
   getNewCell() {
      if(this.grid.isFull()) return null;

      let emptyCells = [];

      // Get all cells that have the value zero
      for(let row = 0; row < this.grid.getSize(); row++){
         for(let col = 0; col < this.grid.getSize(); col++){
            let cell = new Cell(row, col);
            if(this.grid.getCellValue(cell) == 0)
               emptyCells.push(cell);
            }
      }

      // Generates a random number between 0 and (total number of empty cells - 1)
      let randNum = this._getRandomValue(0, emptyCells.length);
      return emptyCells[randNum];
   }

   // Returns a number to be spawned at a cell
   getNewValue() {
      let newValue = Math.random() < 0.9 ? 2 : 4;
      return newValue;
   }

    // _getRandomValue: returns a random value between lower and upper
   _getRandomValue(lower, upper) {
      return Math.floor(Math.random() * (upper - lower)) + lower;
   }

}
