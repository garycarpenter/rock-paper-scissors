console.log("Hello World!");

// function gets computer selection for rock, paper, scissors
function getComputerChoice() {
  // return rock paper or scissors
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
  }
}

// play a single round of rps
function playRound(playerSelection, computerSelection) {
  // todo compare playerSelection and computerSelection then declare winner
  if (playerSelection == computerSelection) {
    return "You tied. Play again";
  }
  if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose!! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win!! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You Lose!! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You Win!! Scissors beats Paper";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Win!! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You Lose!! Scissors beats Paper";
  } else {
    return "Enter Rock, Paper, or Scissors";
  }
}

let playerchoice = prompt("Choose paper rock or scissors: ");
playerchoice = playerchoice.toLowerCase(playerchoice);
const playerSelection = playerchoice;
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
console.log(playerSelection);
console.log(computerSelection);
