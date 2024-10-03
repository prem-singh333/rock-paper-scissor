let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choise");
let msg = document.querySelector(".msg");

let userScoreBorad = document.querySelector("#user-score");
let compScoreBorad = document.querySelector("#comp-score");

// let gameMsg = document.querySelector(".msg");
// console.log(gameMsg);

let showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScoreBorad.innerText = userScore;
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.color =  "#00ff00";
    }else{
        compScore++;
        compScoreBorad.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.color ="#ff0000";
    }
}

let gameDraw = () => {
    msg.innerText = "Game was Draw! Play Again";
    msg.style.color = "#000000";
}

let genComChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

let playGame = (userChoice) => {

let compChoice = genComChoice();

    if(userChoice === compChoice){
        gameDraw();
    }else{
        let userWin = true;

    if(userChoice === "rock"){
        userWin = compChoice === "paper"? false : true;
    } else if(userChoice === "paper") { 
        userWin = compChoice === "scissors"? false : true;
    } else {
        userWin = compChoice === "rock"? false : true;
    }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});