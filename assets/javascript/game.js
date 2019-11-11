
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