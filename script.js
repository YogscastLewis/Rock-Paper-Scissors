
let computerChoice;
let humanChoice;

function getComputerChoice() {

    computerChoice = Math.floor( Math.random() * 3 );

    if ( computerChoice == 0 ) {

        console.log("Computer: Rock");
        
    } else if ( computerChoice == 1 ) {

        console.log("Computer: Paper");

    } else {

        console.log("Computer: Scissors");
        
    }
}

function getHumanChoice() {

    humanChoice = prompt();

    if ( humanChoice == "Rock" ) {

        console.log("Human: Rock");
        humanChoice = 0;

    } else if ( humanChoice == "Paper" ) {

        console.log("Human: Paper");
        humanChoice = 1;

    } else if ( humanChoice == "Scissors" ) {

        console.log("Human: Scissors");
        humanChoice = 2;

    }
}

function gameLogic() {
    if (humanChoice == 0) {
        computerChoice == 0 ? console.log("Draw!") :
        computerChoice == 1 ? console.log("You Lose!") :
        console.log("You Win!")
    } 
    else if (humanChoice == 1) {
        computerChoice == 0 ? console.log("You Win!") :
        computerChoice == 1 ? console.log("Draw!") :
        console.log("You Lose!")
    }
    else {
        computerChoice == 0 ? console.log("You Lose!") :
        computerChoice == 1 ? console.log("You Win!") :
        console.log("Draw!")
    }
}

getHumanChoice();
getComputerChoice();
gameLogic();