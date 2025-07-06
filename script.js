let userScore = 0;
let compScore = 0;

const choices =document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice =() =>{
    let options = ["rock", "paper", "scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
    //Rock ,Paper ,Scissors
};
const drawGame =() =>{
    // console.log("Game was draw")
    msg.innerText ="Game was Draw. Play again.";
    msg.style.backgroundColor= "#081b31";
};
const showWinner =(userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        // console.log("You Win!");
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        // console.log("You Lose");
        msg.innerText = `You Lose ! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame =(userChoice)=>{
    console.log("user Choice =" , userChoice);
    //Genrate Computer Choice
    const compChoice = genCompChoice();
    console.log("Computer Choice =", compChoice);

    if(userChoice=== compChoice){
        //Draw Game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            //Scissor , paper
            userWin=compChoice === "paper" ? false : true;
    }else if(userChoice ==="paper"){
        //r ock ,scissors
        userWin = compChoice === "scissors" ? false : true;
    }else{
        //rock ,paper
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin ,userChoice ,compChoice);
  }
};
choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});