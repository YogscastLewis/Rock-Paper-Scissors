
let computerChoice;
let humanChoice;

function getComputerChoice() {

    computerChoice = Math.floor( Math.random() * 3 );

    if ( computerChoice == 0 ) {

        console.log("Rock")

    } else if ( computerChoice == 1 ) {

        console.log("Paper")

    } else {

        console.log("Scissors")

    }
}

function getHumanChoice() {

    humanChoice = prompt();

    if ( humanChoice == "Rock" ) {

        console.log("Rock")

    } else if ( humanChoice == "Paper" ) {

        console.log("Paper")

    } else if ( humanChoice == "Scissors" ) {

        console.log("Scissors")

    }
}


getHumanChoice()
getComputerChoice()