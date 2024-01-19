// Represents a cell on the grid, with (0,0) being the top-left corner

class Cell {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getX() { return this.x; }

    getY() { return this.y; }

    // copy: returns a copy of this cell
    copy() {
        return new Cell(this.x, this.y);
    }

    // toString: returns a human-readable string version of the cell
    toString() {
        return `[${this.x}, ${this.y}]`;
    }

}
// End cell.js
