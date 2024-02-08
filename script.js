

window.addEventListener("load", () => {

    let buttons = document.querySelector("#buttons");

buttons.addEventListener('click', (event) => {
    let target = event.target;
    playRound(target.id);
});

})

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

let sumUser = 0, sumComp = 0;
function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let resultDiv = document.querySelector("#result");
    console.log("player= "+playerSelection + "  comp= "+computerSelection);
    if(playerSelection === computerSelection) {
        resultDiv.innerText =  "it's a tie!"
    }

    else if(playerSelection === "rock") {
        if(computerSelection === "paper") {
            resultDiv.innerText = "You Lose! Paper beats Rock";
            sumComp++;
        }
        else {
            resultDiv.innerText = "You Win! Rock beats Scissors";
            sumUser++;
        }
            
    }

    else if(playerSelection === "paper") {
        if(computerSelection === "rock") {
            resultDiv.innerText = "You Win! Paper beats Rock";
            sumUser++;
        }
        else {
         resultDiv.innerText = "You Lose! Scissors beats Paper";
         sumComp++;
        }
            
    }
    else {
        if(computerSelection === "rock") {
            resultDiv.innerText = "You Lose! Rock Beats Scissors"
            sumComp++;
        }
        else { 
            resultDiv.innerText = "You Win! Scissors beats Paper";
            sumUser++;
        }   
    }

    document.querySelector("#user-score").innerText = sumUser;
    document.querySelector("#comp-score").innerText = sumComp;
    
    if(sumComp === 5) {
        resultDiv.innerText = "You are the official LOSER!";
        buttons.replaceWith(buttons.cloneNode(true));
    }
    else if(sumUser === 5) {
        resultDiv.innerText = "You are the official LOSER!";
        buttons.replaceWith(buttons.cloneNode(true));
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