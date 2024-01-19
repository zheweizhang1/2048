// Tests for GridDataDisplay.js
class GridDataDisplayTest extends Test {

    constructor() {
        super();
    }

    // Test for gridDataDisplay.toHTML()
    toHTML() {
        // Test 1
        let gridData = new GridData();
        let gridDataDisplay = new GridDataDisplay(gridData);
        let actualString = gridDataDisplay.toHTML();
        let expectedString = "<div class='wrapper'><div class='cell'>&nbsp;</div><div class='cell'>&nbsp;</div><div class='cell'>&nbsp;</div><div class='cell'>&nbsp;</div><div class='cell'>&nbsp;</div><div class='cell'>&nbsp;</div><div class='cell'>&nbsp;</div><div class='cell'>&nbsp;</div><div class='cell'>&nbsp;</div><div class='cell'>&nbsp;</div><div class='cell'>&nbsp;</div><div class='cell'>&nbsp;</div><div class='cell'>&nbsp;</div><div class='cell'>&nbsp;</div><div class='cell'>&nbsp;</div><div class='cell'>&nbsp;</div></div>";
        this.assertEquals(expectedString, actualString);

        // Test 2
        gridData._setData([
            [2,4,8,16],
            [0,0,0,0],
            [0,0,0,0],
            [16,8,4,2]
        ]);
        actualString = gridDataDisplay.toHTML();
        expectedString = "<div class='wrapper'><div class='cell' style='background-color:rgb(215,211,192)';>2</div><div class='cell' style='background-color:rgb(219,212,173)';>4</div><div class='cell' style='background-color:rgb(223,212,153)';>8</div><div class='cell' style='background-color:rgb(227,212,134)';>16</div><div class='cell'>&nbsp;</div><div class='cell'>&nbsp;</div><div class='cell'>&nbsp;</div><div class='cell'>&nbsp;</div><div class='cell'>&nbsp;</div><div class='cell'>&nbsp;</div><div class='cell'>&nbsp;</div><div class='cell'>&nbsp;</div><div class='cell' style='background-color:rgb(227,212,134)';>16</div><div class='cell' style='background-color:rgb(223,212,153)';>8</div><div class='cell' style='background-color:rgb(219,212,173)';>4</div><div class='cell' style='background-color:rgb(215,211,192)';>2</div></div>";
        this.assertEquals(expectedString, actualString);
    }
}

new GridDataDisplayTest().runAll();
