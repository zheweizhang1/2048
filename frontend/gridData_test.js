// Tests for GridData.js
class GridDataTest extends Test {

    constructor() {
        super();
    }

    // Test for gridData.toString()
    toString() {
        // Test 1
        var gridData = new GridData(); 
        // Default data: [
        //     [0, 0, 0, 0],
        //     [0, 0, 0, 0],
        //     [0, 0, 0, 0],
        //     [0, 0, 0, 0]
        // ]
        var actualString = gridData.toString();
        var expectedString = "[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]";
        this.assertEquals(expectedString, actualString);

        // Test 2
        gridData._setData([
            [2,4,8,16],
            [0,0,0,0],
            [0,0,0,0],
            [16,8,4,2]
        ]);
        actualString = gridData.toString();
        expectedString = "[[2,4,8,16],[0,0,0,0],[0,0,0,0],[16,8,4,2]]";
        this.assertEquals(expectedString, actualString);
    }

    // Test for gridData.equals()
    equals() {
        // Test 1
        var gridData = new GridData();
        var expectedGrid = new GridData();
        expectedGrid._setData([
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]);
        this.assertTrue(expectedGrid.equals(gridData));

        // Test 2
        gridData._setData([
            [2,4,8,16],
            [0,0,0,0],
            [0,0,0,0],
            [16,8,4,2]
        ]);
        expectedGrid._setData([
            [2,4,8,16],
            [0,0,0,0],
            [0,0,0,0],
            [16,8,4,2]
        ]);
        this.assertTrue(expectedGrid.equals(gridData));
    }

    // Test for gridData.copy()
    copy() {
        // Test 1
        var gridData = new GridData();
        var copyGrid = gridData.copy();
        this.assertTrue(gridData.equals(copyGrid));

        // Test 2
        gridData._setData( [[2,4,8,16],[0,0,0,0],[0,0,0,0],[16,8,4,2]] );
        copyGrid = gridData.copy();
        this.assertTrue(gridData.equals(copyGrid));
    }
}

new GridDataTest().runAll();