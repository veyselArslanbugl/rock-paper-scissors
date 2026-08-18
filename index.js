

//1

function  getComputerChoice(){
    let randomNumber = Math.random(); 
    if(randomNumber < 0.33){
        return "rock";
    }else if(randomNumber < 0.66){
        return "paper";
    }else{
        return "scissors";
    }
}


// 2

function getHumanChoice(){
    let userInput = prompt("Please enter your choice: rock , paper or scissors");
    return userInput.toLowerCase();
}



//4

function playGame(){

    //3.1
    let humanScore = 0;
    let computerScore = 0;

    //3.2
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
          console.log("It's a tie! Both chose " + humanChoice);
        } else if (
          (humanChoice === "rock" && computerChoice === "scissors") ||
          (humanChoice === "paper" && computerChoice === "rock") ||
          (humanChoice === "scissors" && computerChoice === "paper")
        ) {
          humanScore++;
          console.log("You win! " + humanChoice + " beats " + computerChoice);
        } else {
          computerScore++;
          console.log("You lose! " + computerChoice + " beats " + humanChoice);
        }
    }


    let humanSelection;
    let computerSelection;

    console.log("Round 1");
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection ,computerSelection);

    console.log("Round 2");
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection ,computerSelection);

    console.log("Round 3");
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection ,computerSelection);


    console.log("Round 4");
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection ,computerSelection);

    console.log("Round 5");
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection ,computerSelection);

    console.log("=== GAME OVER ===");
    if (humanScore > computerScore) {
        console.log("CONGRATULATIONS, YOU WON! Score: " + humanScore + "-" + computerScore);
    } else if (computerScore > humanScore) {
        console.log("COMPUTER WON! Score: " + computerScore + "-" + humanScore);
    } else {
        console.log("IT'S A TIE! Score: " + humanScore + "-" + computerScore);
    }

}

playGame();