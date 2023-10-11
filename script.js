let outputDiv;
let targetNum;
let chosenNum;
let numGuesses;

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
    // Your JavaScript code for commitGuess function here...
}

function logNum() {
    outputDiv = document.getElementById("numLog");
    // Your JavaScript code for logNum function here...
}

function reset() {
    initialize();
    outputDiv.innerHTML = "All guesses and attempts reset! Find the new target number."
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

function commitGuess() {
    console.log("Commit Guess function called");
    console.log("chosenNum: " + chosenNum + ", targetNum: " + targetNum);
    // ... rest of your code
}

