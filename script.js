function getComputerChoice() {
    let rndNum = Math.floor(Math.random() * 3);
    let compChoice;

    switch(rndNum) {
        case 0:
            compChoice = "rock";
            break;
        case 1:
            compChoice = "paper";
            break;
        case 2:
            compChoice = "scissors";
            break;
        default:
            break;
    }

    return compChoice;
}

function getUserChoice() {
    let userChoice = prompt("choose! rock, paper or scissors?");
    userChoice = userChoice.toLocaleLowerCase();

    return userChoice;

}

function playRound() {
    let computerSelection = getComputerChoice();
    let playerSelection = getUserChoice();
    console.log("player= "+playerSelection + "  comp= "+computerSelection);
    if(playerSelection === computerSelection) {
        return "it's a tie!"
    }

    else if(playerSelection === "rock") {
        if(computerSelection === "paper") {
            return "You Lose! Paper beats Rock";
        }
        else return "You Win! Rock beats Scissors";
    }

    else if(playerSelection === "paper") {
        if(computerSelection === "rock") {
            return "You Win! Paper beats Rock";
        }
        else return "You Lose! Scissors beats Paper";
    }
    else {
        if(computerSelection === "rock") {
            return "You Lose! Rock Beats Scissors"
        }
        else return "You Win! Scissors beats Paper";
    }
    

}

function playGame() {

    let countWin = 0, countLose = 0;
    let result;

    for(i=0; i<5; i++) {
        result = playRound();
        console.log(result);
        if(result.includes("Win")) {
            countWin++;
        }
        else if(result.includes("Lose")) {
            countLose++;
        }
        
    }
    
    if(countWin > countLose) {
        console.log("You are the official WINNER!")
    }
    else if(countLose > countWin) {
        console.log("You are the official LOSER!")
    }
    else console.log("it's officially a TIE!")
}

playGame();

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log("player =  " + playerSelection)
// console.log("comp =  " + computerSelection)
// console.log(playRound(playerSelection, computerSelection));

