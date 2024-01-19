class GridDataInitializer {
    
    constructor(gridData) {
        this.gridData = gridData;
    }

    // createInitialGrid: populates two cells on the grid with 2's
    createInitialGrid() {
        let gridArray = [];
        for(let row = 0; row < this.gridData.getSize(); row++){
            for(let col = 0; col < this.gridData.getSize(); col++){
                let cell = new Cell(row, col);
                gridArray.push(cell);
            }
        }

        this._setInitialValues(gridArray);
    }

    _setInitialValues(gridArray) {
        // returns a random index between 0 and num of elements in gridArray
        let firstIndex = this._getRandomValue(0, gridArray.length);
        // sets this.gridData's cell at firstIndex to 2
        this.gridData.setCell(gridArray[firstIndex], 2);
        // removes value at firstIndex
        gridArray.splice(firstIndex, 1);

        // returns a random index between 0 and num of elements in gridArray
        let secondIndex = this._getRandomValue(0, gridArray.length);
        // sets this.gridData's cell at secondIndex to 2
        this.gridData.setCell(gridArray[secondIndex], 2);
         // removes value at secondIndex
        gridArray.splice(secondIndex, 1);
    }

    // _getRandomValue: returns a random value between lower and upper
    _getRandomValue(lower, upper) {
        return Math.floor(Math.random() * (upper - lower)) + lower;
    }
}