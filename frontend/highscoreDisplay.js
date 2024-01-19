// Displays the list of highscores
class HighscoreDisplay {
    constructor(container) {
        this.container = container;
    }

    init() {
        var container = this.container;
        var setHtmlFunction = this._toHTML;
        let data = {
            "highscores": [
                {
                    "name": "Apples",
                    "score": 4096
                },
                {
                    "name": "Bobby",
                    "score": 2048
                },
                {
                    "name": "Cindy",
                    "score": 1024
                }
            ]
        }
        container.innerHTML = setHtmlFunction(data);
    }

    _toHTML(data) {
        const highscoresArr = data.highscores;
        var res = "<table>";
        res += "<tr><th>Name</th><th>Score</th></tr>"
        highscoresArr.forEach(function(highscore) {
            res += "<tr>";
            res += "<td>" + highscore.name + "</td>";
            res += "<td>" + highscore.score + "</td>";
            res += "</tr>";
        })
        res += "</table>";
        return res;
    }

}
