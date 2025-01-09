let userScore=0;
let computerScore=0;
let moves=0;

const choices=document.querySelectorAll(".choice");
const count=document.querySelector("#count-num");
const msg=document.querySelector("#play-move");
const user_score=document.querySelector("#user-score");
const computer_score=document.querySelector("#computer-score");
const new_game=document.querySelector("#new");
const reset_game=document.querySelector("#reset");


//generate computer choice
const geneCompChoice=()=>{
     const option=["rock","paper","scissors"];
     const randomChoice=Math.floor(Math.random()*3);  
     return option[randomChoice];         //Math.random() generates random decimal number b/w 0 to 1, //multiplying it with number n gives range of random number between 0 to (n-1),//Math.floor() remove decimal from number 
                                              

};

//show winner
const showWinner=(userWin)=>{
      if(userWin){
        //console.log("you win!!");
        msg.innerText="YOU WIN !!";
        msg.style.backgroundColor="green";
        userScore++;
        user_score.innerText=userScore;
      }else{
        //console.log("you lose!!");
        msg.innerText="YOU LOSE";
        msg.style.backgroundColor="red";
        computerScore++;
        computer_score.innerText=computerScore;
      }
};

const newGame=()=>{
    userScore=0;
    computerScore=0;
    moves=0;
    user_score.innerText=userScore;
    computer_score.innerText=computerScore;
    msg.innerText="PLAY YOUR MOVE!!";
    msg.style.backgroundColor="#1C1D21";
    count.innerText=moves;
};

//to genearte random choice by computer
const playGame=(choiceId)=>{
     //console.log("choice of user",choiceId);
     //generate computer choice
     const computerChoice= geneCompChoice();
     //console.log("computer choice is" ,computerChoice);
     if(choiceId===computerChoice){
        msg.innerText=" DRAW ";
        msg.style.backgroundColor="yellow";
       // console.log("computer score",computerScore);
       // console.log("user score",userScore);
       // console.log("game is draw");
     }else{
        let userWin=true;
        if(choiceId==="rock"){
            //paper,scissor
            userWin = computerChoice==="paper"?false:true;    
        }else if(choiceId==="paper"){
            //rock,scissor
            userWin = computerChoice==="rock"?true:false;   
        }else{
            //paper,rock
            userWin=computerChoice==="paper"?true:false;
        }
    
        showWinner(userWin);

     }
};

//selecting all choice from choices using forEach loop
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        moves++;
        count.innerText=moves;

        const choiceId=choice.getAttribute("id");  //get id 
        //console.log("choice was clicked",choiceId);
        playGame(choiceId);
    
    });

});

new_game.addEventListener("click",()=>{
    //console.log("new game is clicked");
    newGame();
});
reset_game.addEventListener("click",()=>{
    //console.log("reset game is clicked");
    newGame();
});