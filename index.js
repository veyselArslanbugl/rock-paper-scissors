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

