function getComputerChoice() {
    /*
    1. Randomly choose an integer from 1 to 3, inclusive.
    2. Based on the integer chosen, return 'Rock', 'Paper', or 'Scissors'.
    */
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

let rock_count = 0;
let paper_count = 0;
let scissors_count = 0;
for (let i = 0; i < 10000000; i++) {
    switch(getComputerChoice()) {
        case 'Rock':
            rock_count++;
            break;
        case 'Paper':
            paper_count++;
            break;
        case 'Scissors':
            scissors_count++;
            break;
    }
}

console.log(`Rock count: ${rock_count}`);
console.log(`Paper count: ${paper_count}`);
console.log(`Scissors count: ${scissors_count}`);

