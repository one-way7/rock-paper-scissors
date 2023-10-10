let playerScore = 0;
let computerScore = 0;
let gameEnd = 0;

const btns = document.querySelectorAll('button');
const result = document.querySelector('.result')

btns.forEach(btn => {
    btn.addEventListener('click', playRound)
})

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

function playRound(e) {
    const player = e.target.textContent;
    const computer = getComputerChoice();

    if (player === computer) {
        result.textContent = `It's a tie. Player score: ${playerScore}, Computer score: ${computerScore}.`
    } else if (player === 'rock' && computer === 'scissors' || 
        player === 'paper' && computer === 'rock' ||
        player === 'scissors' && computer === 'paper') {
            playerScore += 1;

            if (playerScore > 4) {
                result.textContent = `Player Win the game!`;
                playerScore = 0;
                computerScore = 0;
                gameEnd = 2;
                return;
            }

            result.textContent = `You Won! ${player} beats ${computer}. Player score: ${playerScore}, Computer score: ${computerScore}.`;
    } else {
            computerScore += 1;

            if (computerScore > 4) {
                result.textContent = `Computer Win the game!`;
                computerScore = 0;
                playerScore = 0;
                gameEnd = 2;
                return;
            }

            result.textContent = `You Lose! ${computer} beats ${player}. Player score: ${playerScore}, Computer score: ${computerScore}.`; 
    }
}

