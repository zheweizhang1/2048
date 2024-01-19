// Represents the data of the 2048 grid
class GridData {

    // ############################## Constructor ##############################
    constructor() {
        // this.data - 4x4 2d array; prepopulate with 0's by default
        this.data = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    }

    // ############################## Set Functions ##############################

    // _setData: sets this.data to newData
    // !! For testing purposes ONLY !!
    _setData(newData) {
        for (let row = 0; row < newData.length; row++) {
            this.data[row] = newData[row].slice();
        }
    }

    // setRow: sets a row of this.data to rowData
    setRow(rowIndex, rowData) {
        for( let col = 0; col < this.getSize(); col++)
            this.data[rowIndex][col] = rowData.getCellValue(col);
    }

    // setColumn: sets a column of this.data to colData
    setColumn(colIndex, colData) {
        for (let row = 0; row < this.getSize(); row++) {
            this.data[row][colIndex] = colData.getCellValue(row);
        }
    }

    // setCell: sets a cell of this.data to newValue
    setCell(cell, newValue) { this.data[cell.getX()][cell.getY()] = newValue; }

    // ############################## Get Functions ##############################

    // getSize: returns the size of the board
    // ** Currently assuming the board will always be a n*n square **
    getSize() {
        return this.data.length;
    }

    // getRow: returns a row of this.data
    getRow(row) {
        let rowSegment = new Segment(this.data[row]);
        return rowSegment;
    }

    // getColumn: returns a column of this.data
    getColumn(col) {
        let newCol = [];
        for (let row = 0; row < this.getSize(); row++) {
            newCol.push(this.data[row][col]);
        }
        let colSegment = new Segment(newCol);
        return colSegment;
    }

    // getCellValue: returns the value of the cell at row, col of this.data
    getCellValue(cell) {
        return this.data[cell.getX()][cell.getY()];
    }


    // ############################## Misc. Helper Functions ##############################

    // toString: returns string version of this.data (in array format)
    toString() {
        var res = "[";
        for (let row = 0; row < this.data.length; row++) {
            res += "[";
            for (let col = 0; col < this.data[row].length; col++) {
                res += this.data[row][col].toString() + ",";
            }
            res = res.substring(0, res.length - 1);
            res += "],";
        }
        res = res.substring(0, res.length - 1);
        res += "]";
        return res;
    }

    // equals: returns whether toString() of current GridData and comparable GridData are equal
    equals(otherGridData) {
        return this.toString() == otherGridData.toString();
    }

    // copy: returns a copy of this.data (4x4 2d array)
    copy() {
        var copy = new GridData();
        copy._setData(this.data);
        return copy;
    }

    // isFull: returns true if there are no empty cells, false otherwise
    isFull() {
       for(let row = 0; row < this.getSize(); row++){
          if(this.data[row].includes(0)) return false;
       }
       return true;
    }

}
// End gridData.js
