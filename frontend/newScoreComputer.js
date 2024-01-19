// Computes the score by comparing old and new data.
class NewScoreComputer {
    constructor(oldGrid, newGrid) {
      this.oldGrid = oldGrid;
      this.newGrid = newGrid;
    }
  
    
    // Returns the new score earned from the current round.
    getNewScore() {
        var score = 0;
        var oldScores = {};
        for(let row = 0; row < this.oldGrid.getSize(); row++){
            var oldRow = this.oldGrid.getRow(row);
            for(let col = 0; col < this.oldGrid.getSize(); col++){
                if(oldRow.getCellValue(col) != 0){
                    if(oldRow.getCellValue(col) in oldScores){
                        oldScores[oldRow.getCellValue(col)]++;
                    }else
                        oldScores[oldRow.getCellValue(col)] = 1;
                }
            }
        }

        for(let row = 0; row < this.newGrid.getSize(); row++){
            var newRow = this.newGrid.getRow(row);
            for(let col = 0; col < this.newGrid.getSize(); col++){
                if(newRow.getCellValue(col) != 0){
                    if(newRow.getCellValue(col) in oldScores && oldScores[newRow.getCellValue(col)] > 0){
                        oldScores[newRow.getCellValue(col)]--;
                    }
                }
            }
        }

        for(var key in oldScores){
            score += key * oldScores[key];
        }

        return score;
    }
  
}
  