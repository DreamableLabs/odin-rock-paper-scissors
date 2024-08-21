# odin-rock-paper-scissors

This project is a simple implementation of the classic game Rock-Paper-Scissors using JavaScript. The game is played via a user interface (UI) where the user can interact with the game by clicking buttons. The objective is to win a best-of-five rounds game against the computer.

## Project Structure

The project contains the following files:

- `index.html`: The main HTML file that loads the game.
- `js/scripts.js`: The JavaScript file that contains the game logic.
- `css/style.css`: The CSS file for styling the UI.

## How to Play

1. Open the `index.html` file in your web browser.
2. You'll see three buttons on the screen: Rock, Paper, and Scissors.
3. Click one of the buttons to make your choice.
4. After each round, the result (win, lose, or tie) will be displayed, and the live score will be updated.
5. The game continues until either you or the computer reaches 5 points (rounds won).
6. Once a player reaches 5 points, the winner of the game is announced, and the scores are reset to 0 for a new game.

## Game Logic

- The computer randomly selects Rock, Paper, or Scissors for each round.
- The user makes their selection by clicking one of the buttons in the UI.
- The winner of each round is determined based on the standard rules:
  - Rock beats Scissors
  - Scissors beats Paper
  - Paper beats Rock
- The game keeps track of the score for both the user and the computer.
- The first player to win 5 rounds is declared the overall winner, and the game resets for another round.

## How to Run the Project

To run the project locally:

1. Download or clone the repository.
2. Open the `index.html` file in your preferred web browser.
3. Start playing the game by clicking the buttons in the UI.

Enjoy playing Rock-Paper-Scissors!