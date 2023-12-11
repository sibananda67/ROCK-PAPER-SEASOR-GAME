let userscore = 0;
let computerscore = 0 ;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#computer-score");



const genCompChoice = () => {
    const options = ["rock" ,"paper" , "seasor"];
    const randIndx =Math.floor(Math.random() * 3);
    return options[randIndx];
};

const drawGame = () => {
    msg.innerText = "you game is draw";
    msg.style.backgroundColor = "#5C415D ";
}


const showWinner = (userWin , userchoice , CompChoice) => {
    if (userWin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText =` you win! Your ${userchoice } beats ${CompChoice}`;
        msg.style.backgroundColor = "green";
    }else {
        computerscore++ ;
        compscorepara.innerText = computerscore;
        msg.innerText = `you lose.  ${CompChoice} beats Your ${userchoice } `;
        msg.style.backgroundColor = "Red";
    }
}

const playGame = (userchoice) => {
    console.log("user choice = " , userchoice);
    //generate computer choice  -> modular way of programimg
    const CompChoice = genCompChoice();
    console.log("comp choice = " , CompChoice);

    if (userchoice === CompChoice) {
        //draw game
        drawGame();
    } else {
        let userWin = true;
        if (userchoice === "rock") {
            //paper, seasor 
            CompChoice === "paper" ? false : true;   
        } else if(userchoice === "paper") {
            //rock, seasor
            CompChoice === "seasor" ? false :true;
        } else {
            //rock ,paper
            CompChoice === "rock" ? false : true;
        }
        showWinner(userWin,userchoice,CompChoice);
    }
};

choices.forEach ((choice) =>{
    choice.addEventListener("click" , () => {
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked", userchoice );
        playGame(userchoice)
    })
});