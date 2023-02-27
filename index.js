console.log("Hello from console!");

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    getComputerChoice();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
  })
);

// function gets computer selection for rock, paper, scissors
function getComputerChoice() {
  // return rock paper or scissors
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "PAPER";
      break;
    case 3:
      computer = "SCISSORS";
      break;
  }
}

// check winner, a more readable version
function checkWinner() {
  if (player == computer) {
    return "You Tied";
  } else if (computer == "ROCK") {
    return player == "PAPER" ? "You Win!!" : "You Lose!!";
  } else if (computer == "PAPER") {
    return player == "SCISSORS" ? "You Win!!" : "You Lose!!";
  } else if (computer == "SCISSORS") {
    return player == "ROCK" ? "You Win!!" : "You Lose!!";
  }
}

// first version of the function that determines a winner
// // play a single round of rps
// function playRound(playerSelection, computerSelection) {
//   // todo compare playerSelection and computerSelection then declare winner
//   if (playerSelection == computerSelection) {
//     return "You tied. Play again";
//   }
//   if (playerSelection === "rock" && computerSelection === "paper") {
//     return "You Lose!! Paper beats Rock";
//   } else if (playerSelection === "rock" && computerSelection === "scissors") {
//     return "You Win!! Rock beats Scissors";
//   } else if (playerSelection === "scissors" && computerSelection === "rock") {
//     return "You Lose!! Rock beats Scissors";
//   } else if (playerSelection === "scissors" && computerSelection === "paper") {
//     return "You Win!! Scissors beats Paper";
//   } else if (playerSelection === "paper" && computerSelection === "rock") {
//     return "You Win!! Paper beats Rock";
//   } else if (playerSelection === "paper" && computerSelection === "scissors") {
//     return "You Lose!! Scissors beats Paper";
//   } else {
//     return "Enter Rock, Paper, or Scissors";
//   }
// }

// let playerchoice = prompt("Choose paper rock or scissors: ");
// playerchoice = playerchoice.toLowerCase(playerchoice);
// const playerSelection = playerchoice;
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
// console.log(playerSelection);
// console.log(computerSelection);
