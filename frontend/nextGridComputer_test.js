// Tests for nextGridComputer.js
class NextGridComputerTest extends Test{
    constructor(){
        super();
    }

    // Test for NextGridComputer.getNextGrid().
    getNextGrid(){
        // Creates a test grid
        let grid = new GridData();
        grid._setData([
            [2, 0, 2, 2],
            [0, 4, 2, 2],
            [8, 4, 2, 0],
            [0, 0, 0, 0]
        ]);

        let expectedGrid = new GridData();
        let directions = Direction.getAll();

        // Test case UP
        var nextGridComputer = new NextGridComputer(directions[0], grid);
        const gridUp = nextGridComputer.getNextGrid();
        expectedGrid._setData([
            [2, 8, 4, 4],
            [8, 0, 2, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]);
        this.assertTrue(gridUp.equals(expectedGrid));

        // Test case DOWN
        nextGridComputer = new NextGridComputer(directions[1], grid);
        const gridDown = nextGridComputer.getNextGrid();
        expectedGrid._setData([
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [2, 0, 2, 0],
            [8, 8, 4, 4]
        ]);
        this.assertTrue(gridDown.equals(expectedGrid));

        // Test case LEFT
        nextGridComputer = new NextGridComputer(directions[2], grid);
        const gridLeft = nextGridComputer.getNextGrid();
        expectedGrid._setData([
            [4, 2, 0, 0],
            [4, 4, 0, 0],
            [8, 4, 2, 0],
            [0, 0, 0, 0]
        ]);
        this.assertTrue(gridLeft.equals(expectedGrid));

        // Test case RIGHT
        nextGridComputer = new NextGridComputer(directions[3], grid);
        const gridRight = nextGridComputer.getNextGrid();
        expectedGrid._setData([
            [0, 0, 2, 4],
            [0, 0, 4, 4],
            [0, 8, 4, 2],
            [0, 0, 0, 0]
        ]);
        this.assertTrue(gridRight.equals(expectedGrid));
    }
}

new NextGridComputerTest().runAll();
