class Game {
    constructor() {
        this.gridContainer = document.getElementById('grid-container');
        this.scoresContainer = document.getElementById('scores-container');
        this.highscoreContainer = document.getElementById('highscore-container');

        this.legendDisplay = new LegendDisplay();
        this.gridData = new GridData();
        this.inputHandler = new InputHandler(this._onMove.bind(this));
        this.gridDataInitializer = new GridDataInitializer(this.gridData);
        this.scoreManager = new ScoreManager();
        this.highscoreDisplay = new HighscoreDisplay();

    }

    // Starts a new game from the beginning.
    play() {
        this.gridDataInitializer.createInitialGrid();
        this._draw();
    }

    // Draws the grid.
    _draw() {
        let gridDataDisplay = new GridDataDisplay(this.gridData);
        this.gridContainer.innerHTML = gridDataDisplay.toHTML();
        this.scoresContainer.innerHTML = this.scoreManager.getScoreDisplay();
        let highscoreDisplay = new HighscoreDisplay(this.highscoreContainer);
        highscoreDisplay.init();
    }

    // Called when the user wants to move in a given direction.
    _onMove(direction) {
        console.log('User wants to move in direction ' + direction.getName());
        let gameOverChecker = new GameOverChecker(this.gridData);
        let nextGridComputer = new NextGridComputer(direction, this.gridData);
        let nextGrid = nextGridComputer.getNextGrid();
        if(!gameOverChecker.isNextMovePossible()){
            this.inputHandler.stopEventListener();
            this.legendDisplay.setGameOverMessage();
        }
        if(this.gridData.equals(nextGrid)){
            console.log("This move isn't possible.");
            this.legendDisplay.setMoveNotPossibleMessage();
            return;
        }

        this.scoreManager.updateScore(this.gridData, nextGrid);
        this.gridData = nextGrid;
        this.legendDisplay.innerHTML = '';
        let newCellComputer = new NewCellComputer(this.gridData);
        let newCell = newCellComputer.getNewCell();
        this.gridData.setCell(newCell, newCellComputer.getNewValue());
        this._draw();
    }
}
