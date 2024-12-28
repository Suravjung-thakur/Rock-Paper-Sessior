let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawGame = () => {
    msg.innerText = "game draw";
    msg.style.backgroundColor = "grey";
}

const genCompChoice = () => {
    const options = ["rock" , "paper" ,"scissors" ];
    const ranIdx =  Math.floor(Math.random()*3);
    return options[ranIdx];
}

const showWinner =  (userWin,uchoiceD,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! your ${uchoiceD} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;  ///problem is heres
        msg.innerText =`You loose. ${compChoice} beats your ${uchoiceD}`;
        msg.style.backgroundColor = "red";

    }
}

const playGame = (uchoiceD) => {
    const compChoice = genCompChoice();

    if(uchoiceD === compChoice){
        drawGame();
    }else {
        let userWin = true;
        if(uchoiceD === "rock"){
          userWin = compChoice === "paper" ? false : true;
        }else if(uchoiceD === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
           userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,uchoiceD,compChoice);
    }
};
//generate computer choice

choices.forEach((choice) => {
    choice.addEventListener("click" ,() =>  {
        const uchoiceD = choice.getAttribute("id"); 
        playGame(uchoiceD);  
    } ) ;
});


