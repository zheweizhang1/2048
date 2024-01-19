// Tests for newCellComputer.js
class NewCellComputerTest extends Test{

   constructor(){
      super();
   }

   //Test for NewCellComputer.getNewCell().
   getNewCell(){
      let grid = new GridData();
      let newCellComputer = new NewCellComputer(grid);
      let newCell = newCellComputer.getNewCell();

      for(let i = 0; i < 5; i++){
         newCell = newCellComputer.getNewCell();
         this.assertEquals(0, grid.getCellValue(newCell));
      }

      grid._setData([
         [2, 0, 2, 2],
         [0, 4, 2, 2],
         [8, 4, 2, 0],
         [0, 0, 0, 0]
      ]);

      newCellComputer = new NewCellComputer(grid);

      for(let i = 0; i < 5; i++){
         newCell = newCellComputer.getNewCell();
         if(newCell){
            let expectedCell = grid.getCellValue(newCell);
            this.assertEquals(expectedCell, grid.getCellValue(newCell));
            this.assertEquals(0, grid.getCellValue(newCell));
         }
      }

      grid._setData([
         [2, 2, 2, 2],
         [4, 4, 2, 2],
         [8, 4, 2, 4],
         [8, 4, 4, 2]
      ]);

      newCellComputer = new NewCellComputer(grid);

      for(let i = 0; i < 5; i++){
         newCell = newCellComputer.getNewCell();
         this.assertEquals(null, newCell);
      }
   }

   // Test for NewCellComputer.getNewValue().
   getNewValue(){
      let grid = new GridData();
      let newCellComputer = new NewCellComputer(grid);
      for(let i = 0; i < 10; i++){
         this.assertTrue([2,4].includes(newCellComputer.getNewValue()));
      }

      let totalRounds = 0;
      let numOfFours = 0;
      for(let j = 0; j < 20; j++){
         while(totalRounds < 500){
            totalRounds++;
            if(newCellComputer.getNewValue() == 4) numOfFours++;
         }
         this.assertTrue(Math.abs(numOfFours/totalRounds - 0.1) < 0.05);
         totalRounds = 0;
         numOfFours = 0;
      }
      
   }
}

new NewCellComputerTest().runAll();
