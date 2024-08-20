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
                console.log('Invalid input! Please choose either Rock, Paper, or Scissors');
                break;
        }
   }
}

function playRound(humanChoice, computerChoice) {
    switch(humanChoice) {
        case 'Rock':
            if (computerChoice === 'Rock') {
                console.log("It's a tie!");
            } else if (computerChoice === 'Paper') {
                console.log('You lose! Paper beats Rock.')
                computerScore++;
            } else if (computerChoice === 'Scissors') {
                console.log('You win! Rock beats Scissors')
                humanScore++;
            }
            break;
        case 'Paper':
            if (computerChoice === 'Rock') {
                console.log('You win! Paper beats Rock');
                humanScore++;
            } else if (computerChoice === 'Paper') {
                console.log("It's a tie!")
            } else if (computerChoice === 'Scissors') {
                console.log('You lose! Scissors beats Paper.')
                computerScore++;
            }
            break;
        case 'Scissors':
            if (computerChoice === 'Rock') {
                console.log('You lose! Rock beats Scissors.');
                computerScore++;
            } else if (computerChoice === 'Paper') {
                console.log('You win! Scissors beats Paper')
                humanScore++;
            } else if (computerChoice === 'Scissors') {
                console.log("It's a tie!")
            }
            break;
    }
}

function playGame() {
    /*
    1. Initialize a round counter to 0.
    2. Play a round. If there is a winner, increment the round counter and the appropriate score.
    If there is no winner, do not increment the round counter.
    3. Continue to play rounds until the round counter equals 5, then declare the winner based on highest score.
    */
}

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
