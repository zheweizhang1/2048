//Displays game messages in the legend
class LegendDisplay{
    constructor(){
        this.legendDisplay = document.getElementById('legend');
    }
    setGameOverMessage(){
        this.legendDisplay.innerHTML = 'Game over<br/>Refresh browser to play again';
    }
    setMoveNotPossibleMessage(){
        this.legendDisplay.innerHTML =
    'This move is not possible<b><br/>Try another move';
    }
}
