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
    /*
    1. Prompt user for choice using prompt().
    2. Parse user input.
    3. If input is a valid choice (rock, paper, or scissors), return that choice.
    4. If input is not a valid choice, continue prompting until a valid choice is entered.
    */

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

for (let i = 0; i < 3; i++) {
    let choice = getHumanChoice();
    console.log(choice);
}