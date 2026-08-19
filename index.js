


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


function getHumanChoice(){
    let userInput = prompt("Please enter your choice: rock , paper or scissors").toLowerCase();
    if( (userInput !== "rock") &&
        (userInput !== "paper") &&
        (userInput !== "scissors")
    ){
        console.log("Invalid choice! I picked one for you.");
        return getComputerChoice();
    }
    return userInput;
}



function playGame(){

    let humanScore = 0;
    let computerScore = 0;

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



    for( let i = 0 ; i < 5 ; i++){
        console.log(`Round ${i + 1}`);
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound( humanSelection , computerSelection);
    }

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