// buttons

const rockButton = document.querySelector(".rock-btn");
const paperButton = document.querySelector(".paper-btn");
const scissorsButton = document.querySelector(".scissors-btn");

// scoreboard

const humanScoreElement = document.querySelector(".human-score span");
const computerScoreElement = document.querySelector(".computer-score span");

// computer choice

const computerChoiceElement = document.querySelector(".computer-choice span");

// result message

const resultMessageElement = document.querySelector(".result-message p");

// player images

const computerImagesElement = document.querySelector(".computer-info span");
const humanImagesElement = document.querySelector(".human-info span");

// scores

let humanScore = 0;
let computerScore = 0;

// Events

rockButton.addEventListener("click", function () {
    let computerChoice = getComputerChoice();
    playRound("rock", computerChoice);
});

paperButton.addEventListener("click", function () {
    let computerChoice = getComputerChoice();
    playRound("paper", computerChoice);
});

scissorsButton.addEventListener("click", function () {
    let computerChoice = getComputerChoice();
    playRound("scissors", computerChoice);
});

// functions for computer choice

function getComputerChoice() {
    let randomNumber = Math.random();

    if (randomNumber < 1 / 3) {
        return "rock";
    } else if (randomNumber < 2 / 3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanScore >= 5 || computerScore >= 5) {
        return;
    }

    if (computerChoice === "rock") {
        computerChoiceElement.textContent = "🪨";
    }

    if (computerChoice === "paper") {
        computerChoiceElement.textContent = "📃";
    }

    if (computerChoice === "scissors") {
        computerChoiceElement.textContent = "✂️";
    }

    if (humanChoice === computerChoice) {
        resultMessageElement.textContent = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultMessageElement.textContent = "You win this round!";

        humanScore++;
        humanScoreElement.textContent = humanScore;
    } else {
        resultMessageElement.textContent = "Computer wins this round!";

        computerScore++;
        computerScoreElement.textContent = computerScore;
    }

    if (humanScore === 5) {
        resultMessageElement.textContent = "Human Wins!";
        computerImagesElement.textContent = "🗿";
    } else if (computerScore === 5) {
        resultMessageElement.textContent = "Computer Wins!";
        humanImagesElement.textContent = "🫃";
    }
}