let outputDiv, targetNum, chosenNum, numGuesses;

function initialize() {
    outputDiv = document.getElementById("numLog");
    outputDiv.innerHTML = "";
    outputDiv = document.getElementById("result");
    targetNum = parseInt(100 * Math.random());
    chosenNum = 50;
    numGuesses = 5;
}

function commitGuess() {
    outputDiv = document.getElementById("result");
        outputDiv = document.getElementById("result");
        if(chosenNum == targetNum){
            outputDiv.innerHTML = "Congrats, you found the hidden number!";
        } else if(chosenNum >= targetNum - 5 && chosenNum <= targetNum + 5){
            outputDiv.innerHTML = "Your number is Very Hot, guess again.";
        } else if(chosenNum >= targetNum - 8 && chosenNum <= targetNum + 8){
            numGuesses--;
            if(numGuesses < 1){
                outputDiv.innerHTML = "Oh no!, you ran out of guesses. The secret number was " + targetNum + ".";
            } else {
            outputDiv.innerHTML = "Your number is Hot, you have " + numGuesses + " guesses left.";
            }
        } else if(chosenNum >= targetNum - 15 && chosenNum <= targetNum + 15){
            numGuesses--;
            if(numGuesses < 1){
                outputDiv.innerHTML = "Oh no!, you ran out of guesses. The secret number was " + targetNum + ".";
            } else {
            outputDiv.innerHTML = "Your number is Very Warm, you have " + numGuesses + " guesses left.";
            }
        } else if(chosenNum >= targetNum - 20 && chosenNum <= targetNum + 20){
            numGuesses--;
            if(numGuesses < 1){
                outputDiv.innerHTML = "Oh no!, you ran out of guesses. The secret number was " + targetNum + ".";
            } else {
            outputDiv.innerHTML = "Your number is Warm, you have " + numGuesses + " guesses left.";
            }
        } else if(chosenNum >= targetNum - 30 && chosenNum <= targetNum + 30){
            numGuesses--;
            if(numGuesses < 1){
                outputDiv.innerHTML = "Oh no!, you ran out of guesses. The secret number was " + targetNum + ".";
            } else {
            outputDiv.innerHTML = "Your number is Cool, you have " + numGuesses + " guesses left.";
            }
        } else if(chosenNum >= targetNum - 40 && chosenNum <= targetNum + 40){
            numGuesses--;
            if(numGuesses < 1){
                outputDiv.innerHTML = "Oh no!, you ran out of guesses. The secret number was " + targetNum + ".";
            } else {
            outputDiv.innerHTML = "Your number is Very Cool, you have " + numGuesses + " guesses left.";
            }
        } else if(chosenNum >= targetNum - 50 && chosenNum <= targetNum + 50){
            numGuesses--;
            if(numGuesses < 1){
                outputDiv.innerHTML = "Oh no!, you ran out of guesses. The secret number was " + targetNum + ".";
            } else {
            outputDiv.innerHTML = "Your number is Cold, you have " + numGuesses + " guesses left.";
            }
        } else {
            numGuesses--;
            if(numGuesses < 1){
                outputDiv.innerHTML = "Oh no!, you ran out of guesses. The secret number was " + targetNum + ".";
            } else {
            outputDiv.innerHTML = "Your number is Very Cold, you have " + numGuesses + " guesses left."
            }
        }
        logNum();
    }

function logNum() {
    outputDiv = document.getElementById("numLog");
    if(chosenNum == targetNum){
        outputDiv.innerHTML += chosenNum + ", Target Number, " + numGuesses + " guesses remaining.  |  ";
    } else if(chosenNum >= targetNum - 5 && chosenNum <= targetNum + 5){
        outputDiv.innerHTML += chosenNum + ", Very Hot, " + numGuesses + " guesses remaining.  |  ";
    } else if(chosenNum >= targetNum - 8 && chosenNum <= targetNum + 8){
        outputDiv.innerHTML += chosenNum + ", Hot, " + numGuesses + " guesses remaining.  |  ";
    } else if(chosenNum >= targetNum - 15 && chosenNum <= targetNum + 15){
        outputDiv.innerHTML += chosenNum + ", Very Warm, " + numGuesses + " guesses remaining.  |  ";
    } else if(chosenNum >= targetNum - 20 && chosenNum <= targetNum + 20){
        outputDiv.innerHTML += chosenNum + ", Warm, " + numGuesses + " guesses remaining.  |  ";
    } else if(chosenNum >= targetNum - 30 && chosenNum <= targetNum + 30){
        outputDiv.innerHTML += chosenNum + ", Cool, " + numGuesses + " guesses remaining.  |  ";
    } else if(chosenNum >= targetNum - 40 && chosenNum <= targetNum + 40){
        outputDiv.innerHTML += chosenNum + ", Very Cool, " + numGuesses + " guesses remaining.  |  ";
    } else if(chosenNum >= targetNum - 50 && chosenNum <= targetNum + 50){
        outputDiv.innerHTML += chosenNum + ", Cold, " + numGuesses + " guesses remaining.  |  ";
    } else {
        outputDiv.innerHTML += chosenNum + ", Very Cold, " + numGuesses + " guesses remaining.  |  ";
    }
}

function reset() {
    initialize();
    outputDiv.innerHTML = "All guesses and attempts reset! Find the new target number.";
}

function addOne() {
    if (chosenNum + 1 > 100) {
        chosenNum = 100;
    } else {
        chosenNum++;
    }
    outputDiv.innerHTML = "Current Number: " + chosenNum;
}

function subOne() {
    if (chosenNum - 1 < 1) {
        chosenNum = 1;
    } else {
        chosenNum--;
    }
    outputDiv.innerHTML = "Current Number: " + chosenNum;
}

function addFive() {
    if (chosenNum + 5 > 100) {
        chosenNum = 100;
    } else {
        chosenNum += 5;
    }
    outputDiv.innerHTML = "Current Number: " + chosenNum;
}

function subFive() {
    if (chosenNum - 5 < 1) {
        chosenNum = 1;
    } else {
        chosenNum -= 5;
    }
    outputDiv.innerHTML = "Current Number: " + chosenNum;
}

function add25() {
    if (chosenNum + 25 > 100) {
        chosenNum = 100;
    } else {
        chosenNum += 25;
    }
    outputDiv.innerHTML = "Current Number: " + chosenNum;
}

function sub25() {
    if (chosenNum - 25 < 1) {
        chosenNum = 1;
    } else {
        chosenNum -= 25;
    }
    outputDiv.innerHTML = "Current Number: " + chosenNum;
}

