// Tests for nextMoveComputer.js
class GameOverCheckerTest extends Test {
   constructor(){
      super();
   }

   // Test for NextMoveComputerTest.isNextMovePossible().
   isNextMovePossible(){
      let grid = new GridData();
      let gameOverChecker = new GameOverChecker(grid);
      this.assertTrue(gameOverChecker.isNextMovePossible());

      // Test case for when there are empty cells
      grid._setData([
         [2, 0, 2, 2],
         [0, 4, 2, 2],
         [8, 4, 2, 0],
         [0, 0, 0, 0]
      ]);
      gameOverChecker = new GameOverChecker(grid);
      this.assertTrue(gameOverChecker.isNextMovePossible());

      // Test case for when the grid is full but there are possible moves
      grid._setData([
         [2, 2, 4, 8],
         [4, 8, 2, 4],
         [4, 2, 4, 2],
         [8, 4, 2, 2]
      ]);
      gameOverChecker = new GameOverChecker(grid);
      this.assertTrue(gameOverChecker.isNextMovePossible());

      // Test case 2 for when the grid is full but there are possible moves
      grid._setData([
         [2, 8, 4, 8],
         [8, 4, 2, 4],
         [2, 8, 4, 2],
         [8, 4, 8, 2]
      ]);
      gameOverChecker = new GameOverChecker(grid);
      this.assertTrue(gameOverChecker.isNextMovePossible());

      // Test case for when there are no possible moves
      grid._setData([
         [2, 8, 4, 8],
         [8, 4, 2, 4],
         [2, 8, 4, 2],
         [8, 4, 8, 4]
      ]);
      gameOverChecker = new GameOverChecker(grid);
      this.assertTrue(!gameOverChecker.isNextMovePossible());

   }
}

new GameOverCheckerTest().runAll();
