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


function playGame() {
    function playRound(humanChoice, computerChoice) {
        switch(humanChoice) {
            case 'Rock':
                if (computerChoice === 'Rock') {
                    console.log("It's a tie!");
                    return false;
                } else if (computerChoice === 'Paper') {
                    console.log('You lose! Paper beats Rock.')
                    computerScore++;
                    return true;
                } else if (computerChoice === 'Scissors') {
                    console.log('You win! Rock beats Scissors')
                    humanScore++;
                    return true;
                }
                break;
            case 'Paper':
                if (computerChoice === 'Rock') {
                    console.log('You win! Paper beats Rock');
                    humanScore++;
                    return true;
                } else if (computerChoice === 'Paper') {
                    console.log("It's a tie!")
                    return false;
                } else if (computerChoice === 'Scissors') {
                    console.log('You lose! Scissors beats Paper.')
                    computerScore++;
                    return true;
                }
                break;
            case 'Scissors':
                if (computerChoice === 'Rock') {
                    console.log('You lose! Rock beats Scissors.');
                    computerScore++;
                    return true;
                } else if (computerChoice === 'Paper') {
                    console.log('You win! Scissors beats Paper')
                    humanScore++;
                    return true;
                } else if (computerChoice === 'Scissors') {
                    console.log("It's a tie!")
                    return false;
                }
                break;
        }
    }
    let roundCount = 0;
    let humanScore = 0;
    let computerScore = 0;

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const roundHasWinner = playRound(humanSelection, computerSelection);


    if (humanScore > computerScore) {
            console.log(`You won the game! You won ${humanScore} rounds and the computer won ${computerScore} rounds.`);
    } else if (computerScore > humanScore) {
            console.log(`You lost the game! You won ${humanScore} rounds and the computer won ${computerScore} rounds.`);
    } else {
            alert('Error. No game winner found. Since 5 rounds are played, there should always be one clear winner.');
    }
}

playGame();