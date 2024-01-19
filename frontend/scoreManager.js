// Stores and keeps track of the score of the game
class ScoreManager {
    constructor() {
      this.score = 0;
    }
  
    
    // Updates the score earned from the this round.
    updateScore(currentGrid, nextGrid) {
        var oldScores = {};

        for(let row = 0; row < currentGrid.getSize(); row++){
            var oldRow = currentGrid.getRow(row);
            for(let col = 0; col < currentGrid.getSize(); col++){
                if(oldRow.getCellValue(col) != 0){
                    if(oldRow.getCellValue(col) in oldScores){
                        oldScores[oldRow.getCellValue(col)]++;
                    }else
                        oldScores[oldRow.getCellValue(col)] = 1;
                }
            }
        }

        for(let row = 0; row < nextGrid.getSize(); row++){
            var newRow = nextGrid.getRow(row);
            for(let col = 0; col < nextGrid.getSize(); col++){
                if(newRow.getCellValue(col) != 0){
                    if(newRow.getCellValue(col) in oldScores && oldScores[newRow.getCellValue(col)] > 0){
                        oldScores[newRow.getCellValue(col)]--;
                    }
                }
            }
        }

        for(var key in oldScores){
            this.score += key * oldScores[key];
        }
    }

    getScoreDisplay() {
        var res = "<div id='score'>";
        res += "<div id='score-label'>SCORE</div>";
        res += "<div id='score-number'>";
        res += this.score;
        res += "</div>";
        res += "</div>";
        return res;
    }
  
}
  