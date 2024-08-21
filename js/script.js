function getComputerChoice() {
   let choice = Math.floor(Math.random()*3) + 1;
   switch(choice) {
    case 1: 
        return 'Rock';
        break;
    case 2:
        return 'Paper';
        break;
    case 3:
        return 'Scissors';
        break;
    default:
        alert('Error in calculating computer choice!')
   }
}

function getHumanChoice() {
   while (true) {
        let choice = prompt('Rock, Paper, or Scissors?', '');
        
        switch(choice.toLowerCase()) {
            case 'rock':
                return 'Rock';
            case 'paper':
                return 'Paper';
            case 'scissors':
                return 'Scissors';
            default:
                results.innerText = 'Invalid input! Please choose either Rock, Paper, or Scissors';
                break;
        }
   }
}


function playRound(humanChoice, computerChoice) {
    switch(humanChoice) {
        case 'Rock':
            if (computerChoice === 'Rock') {
                results.innerText = "It's a tie!";
            } else if (computerChoice === 'Paper') {
                results.innerText = 'You lose! Paper beats Rock.';
                computerScore++;
                updateScores()
            } else if (computerChoice === 'Scissors') {
                results.innerText = 'You win! Rock beats Scissors';
                humanScore++;
                updateScores()
            }
            break;
        case 'Paper':
            if (computerChoice === 'Rock') {
                results.innerText = 'You win! Paper beats Rock';
                humanScore++;
                updateScores()
            } else if (computerChoice === 'Paper') {
                results.innerText = "It's a tie!";
            } else if (computerChoice === 'Scissors') {
                results.innerText = 'You lose! Scissors beats Paper.';
                computerScore++;
                updateScores()
            }
            break;
        case 'Scissors':
            if (computerChoice === 'Rock') {
                results.innerText = 'You lose! Rock beats Scissors.';
                computerScore++;
                updateScores()
            } else if (computerChoice === 'Paper') {
                results.innerText = 'You win! Scissors beats Paper';
                humanScore++;
                updateScores()
            } else if (computerChoice === 'Scissors') {
                results.innerText = "It's a tie!";
            }
            break;
    }

    if (humanScore === 5) {
        results.innerText = 'You won the game!';
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        results.innerText = 'You lost the game!';
        humanScore = 0;
        computerScore = 0;
    }
}

function updateScores() {
    scoreboard.innerText = `Scoreboard \n You: ${humanScore} \n Computer: ${computerScore}`
}

const buttons = document.querySelector('#buttons');
buttons.addEventListener('click', (e) => {
    const humanSelection = e.target.innerText;
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
})

const results = document.querySelector('#results');
const scoreboard = document.querySelector('#scoreboard');

let humanScore = 0;
let computerScore = 0;

