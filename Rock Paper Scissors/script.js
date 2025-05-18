let userScore = 0;
let compScore = 0;


let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    let options = ["rock","paper","scissors"];
    let randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];   
}

const Drawn = () => {
    msg.innerText = "Match drawn!Try again";
    msg.style.backgroundColor = "#09545E";
}
const showWinner = (user,userChoice,compChoice) =>{
    if(user) {
        userScore++;
        userScorePara.innerText = userScore;

        msg.innerText = `You win!Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        
    } else {
        compScore++;
        compScorePara.innerText = compScore;

        msg.innerText = `You lost! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
        
    }
}

const playGame = (userChoice) => {
    let compChoice = genCompChoice();
    if (userChoice === compChoice) {
        Drawn();
    } else {
        let user = true;
        if(userChoice === "rock"){
            user = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            user = compChoice === "scissors" ? false : true;
        } else {
            user = compChoice === "rock" ? false : true;
        }
        showWinner(user,userChoice,compChoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click",function(){
        let userChoice = choice.getAttribute("id");

        playGame(userChoice);
        
    })
});