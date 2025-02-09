
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

    return computerChoice
}

function getHumanChoice() {

    humanChoice = prompt().toUpperCase();

    if ( humanChoice == "ROCK" ) {
        console.log("Human: Rock");
        return 0;
    } else if ( humanChoice == "PAPER" ) {
        console.log("Human: Paper");
        return 1;
    } else if ( humanChoice == "SCISSORS" ) {
        console.log("Human: Scissors");
        return 2;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == 0) {
            if (computerChoice == 0) {
                console.log("Draw!")
            } else if (computerChoice == 1) {
                console.log("You Lose!");
                computerScore += 1; 
            } else {
                console.log("You Win!");
                humanScore += 1;
            }
        } 
        else if (humanChoice == 1) {
            if (computerChoice == 0) {
                console.log("You Win!");
                humanScore += 1;
            } else if (computerChoice == 1) {
                console.log("Draw");
            } else {
                console.log("You Lose!");
                computerScore += 1;
            }
        }
        else {
            if (computerChoice == 0) {
                console.log("You Lose!");
                computerScore += 1;
            } else if (computerChoice == 1) {
                console.log("You Win!");
                humanScore += 1; 
            } else {
                console.log("Draw");
            }
        }
        console.log("Human Score " + humanScore)
        console.log("Computer Score " + computerScore)
        console.log(" ")
    }

    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
}

playGame();