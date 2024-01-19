// Represents the display of the data of the 2048 grid in an HTML table format
class GridDataDisplay {

    constructor(gridData) {
        this.gridData = gridData;
    }

    // toHTML: returns this.gridData in a HTML table format
    toHTML() {
        let size = this.gridData.getSize();
        var res = "<div class='wrapper'>";
        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                let cell = new Cell(row, col);
                let cellValue = this.gridData.getCellValue(cell);
                // If cell if a 0 (empty), draw whitespace (&nbsp;) on board
                res += "<div class='cell'";
                if (cellValue == 0) {
                    res += ">";
                    res += "&nbsp;";
                }
                else {
                    let cellColor = new CellColor(cellValue);
                    let styleString = " style='background-color:rgb(" + cellColor.getColor() + ")';";
                    res += styleString + ">";
                    res += cellValue;
                }

                res += "</div>"
            }
        }
        res += "</div>";
        return res;
    }

}
// End GridDataDisplay.js
