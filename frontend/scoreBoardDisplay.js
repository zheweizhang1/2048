// Represents the display of the current score
class ScoreBoardDisplay {

    constructor(score) {
        this.score = score;
    }

    // toHTML: 
    toHTML() {
        var res = "<div id='score'>";
        res += "<div id='score-label'>SCORE</div>";
        res += "<div id='score-number'>";
        res += this.score;
        res += "</div>";
        res += "</div>";
        return res;
    }

}
// End ScoreBoardDisplay.js
