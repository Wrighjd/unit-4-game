
const CrystalCollector = function() {
    const numPages      = $(".page").length;
    let   currentPage   = 0;
    
    const numCrystals   = 4;
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