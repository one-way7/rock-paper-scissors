let playerScore = 0;
let computerScore = 0;
let gameEnd = 0;

const btn = document.querySelector('button');

btn.addEventListener('click', game)

function playerSelection() {
    return prompt('Make a choice: Rock-Paper-Scissors.').toLowerCase();
}

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
        case 1: 
            return 'rock';
        case 2: 
            return 'paper';
        case 3: 
            return 'scissors'
    }
}

function playRound() {
    const player = playerSelection();
    const computer = getComputerChoice();

    if (player === computer) {
        console.log(`It's a tie. Player score: ${playerScore}, Computer score: ${computerScore}.`);
    } else if (player === 'rock' && computer === 'scissors' || 
        player === 'paper' && computer === 'rock' ||
        player === 'scissors' && computer === 'paper') {
            playerScore += 1;

            if (playerScore > 4) {
                console.log(`Player Win the game!`);
                playerScore = 0;
                computerScore = 0;
                gameEnd = 2;
                return;
            }

            console.log(`You Won! ${player} beats ${computer}. Player score: ${playerScore}, Computer score: ${computerScore}.`);
    } else {
            computerScore += 1;

            if (computerScore > 4) {
                console.log(`Computer Win the game!`);
                computerScore = 0;
                playerScore = 0;
                gameEnd = 2;
                return;
            }

            console.log(`You Lose! ${computer} beats ${player}. Player score: ${playerScore}, Computer score: ${computerScore}.`); 
    }
}

function game() {
    for (let i = 1; i > gameEnd; i++) {
        i = 1;
        playRound();
    }
    
    gameEnd = 0;
}