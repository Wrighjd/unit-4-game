
const CrystalCollector = function() {
    const numPages      = $(".page").length;
    let   currentPage   = 0;
    
    const numCrystals   = 6;
    let   crystalValues = new Array(numCrystals);
    
    
    let numWins = 0, numLosses = 0;
    let targetSum, currentSum;
}
    
    this.startNewGame = function() {
       
        targetSum  = 0;
        currentSum = 0;

        
        for (let i = 0; i < numCrystals; i++) {
            crystalValues[i] = randomInteger(1, 12);

           
            targetSum += randomInteger(1, 6) * crystalValues[i];
        }

        while (targetSum < 19 || targetSum > 120) {
            targetSum = 0;

            for (let i = 0; i < numCrystals; i++) {
                targetSum += randomInteger(1, 6) * crystalValues[i];
            }
        }

        displayCurrentPage();
        displayNumWins();
        displayNumLosses();
        displayTargetSum();
        displayCurrentSum();
    }

    function displayCurrentPage() {
        $(".page").css({"display": "none"});
        $(`.page:nth-of-type(${currentPage + 1})`).css({"display": "block"});
    }

    function displayNumWins() {
        $("#numWins").text(numWins);
    }

    function displayNumLosses() {
        $("#numLosses").text(numLosses);
    }

    function displayTargetSum() {
        $("#targetSum").text(targetSum);
    }

    function displayCurrentSum() {
        $("#currentSum").text(currentSum);
    }

    this.updatePage = function(changeBy) {
        currentPage = (currentPage + changeBy + numPages) % numPages;

        displayCurrentPage();
    }

    function updateNumWins(changeBy) {
        numWins += changeBy;
    }

    function updateNumLosses(changeBy) {
        numLosses += changeBy;
    }

    function randomInteger(a, b) {
        return Math.floor((b - a + 1) * Math.random()) + a;
    }
    
    this.collectCrystal = function(index) {
    
        currentSum += crystalValues[index];

        displayCurrentSum();

        if (currentSum < targetSum) {
            return;

        } else if (currentSum === targetSum) {
            updateNumWins(1);

            $("#outputMessage").html("You've saved the universe!!<br>Click anywhere to continue.");
                             
            this.startNewGame();

        } else {
            updateNumLosses(1);

            $("#outputMessage").html("Thanos has caused the 'Snap'!<br>Click anywhere to continue.");
            
            
            this.startNewGame();

        }
    }
}

let game;

$(document).ready(function() {
    game = new CrystalCollector();

    game.startNewGame();

    $(".page_prev").on("click", function() {
        game.updatePage(-1);
    });

    $(".page_next").on("click", function() {
        game.updatePage(1);
    });

    $(".crystals").on("click", function() {
        game.collectCrystal($(".crystals").index(this));
    });

});