let userScore=0;
let pcScore=0;
let userChoice;
const userScorePoints=document.querySelector("#user-score");
const pcScorePoints=document.querySelector("#pc-score");
const choices=document.querySelectorAll(".choice");
const genCompChoice= ()=>{
    const options=["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
}
const drawGame=()=>{
    console.log("Game is a draw");
    document.querySelector("#msg").innerText="Game is a draw";
    document.querySelector("#msg").style.backgroundColor="rgb(20, 10, 55)";
}
const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorePoints.innerText=userScore;
        console.log("You Win");
        document.querySelector("#msg").innerText=`You Win. Your ${userChoice} beats ${genCompChoice()}`;
        document.querySelector("#msg").style.backgroundColor="rgb(95, 139, 76)";
    }
    else{
        pcScore++;
        pcScorePoints.innerText=pcScore;
        console.log("You lose");
        document.querySelector("#msg").innerText=`You Lose. ${genCompChoice()} beats your ${userChoice}`;
        document.querySelector("#msg").style.backgroundColor="rgb(142, 22, 22)";
    }
}
const playGame=(userChoice)=>{
    
    const pcChoice=genCompChoice();
    
    if(userChoice===pcChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin = pcChoice === "paper" ? false : true;
        }
        else if(userChoice==="paper"){
            userWin = pcChoice === "scissors" ? false : true;
        }
        else{
            userWin = pcChoice==="rock" ? false : true
        }
        showWinner(userWin);
    }

}
choices.forEach((choice) => {
    choice.addEventListener("click" ,()=>{
        userChoice=choice.getAttribute("id");
        // console.log("choice was clicked!!!" ,userChoice);
        playGame(userChoice);
    })
})