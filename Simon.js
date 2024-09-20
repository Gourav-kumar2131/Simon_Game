// Any Key press: Game start -->(button flash) Level 1 
// Check Button press by user  is same as generated game sequence of light.
// track evey button : Event Listener:
/*
let gameSeq = [];
let userSeq = [];

let buttons = ["yellow", "red", "purple", "green"]

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
       console.log("Game Started");
       started = true;
    }
    levelUp();
});

function gameFlash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    }, 500);
}
function userFlash(btn){
    btn.classList.add("userflash");

    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 500);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randindx = Math.floor(Math.random()*3); // 0-3
    let randcolor = buttons[randindx];
    let randBtn = document.querySelector(`.${randcolor}`);

    // console.log(randindx);
    // console.log(randcolor);
    // console.log(randBtn);

    gameSeq.push(randcolor);
    // console.log(gameSeq);

    gameFlash(randBtn);
}


function buttonPress() {
   console.log(this);
   let btn = this;

   userColor = btn.getAttribute("id");
//    console.log(userColor);
   userSeq.push(userColor);

   userFlash(btn);
   checkSeq(userSeq.length -1);
}

let btnAll = document.querySelectorAll(".btn");
for(btn of btnAll){
    btn.addEventListener("click",buttonPress);
}

function checkSeq(index){
    // console.log("Curr level",level);
   

    if(userSeq[index] == gameSeq[index]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
        console.log("Same Value");
    }
    else{
        
        h2.innerText = `Game Over! Press any key to start`;
    }
    resetGame();
}
function resetGame() {
    started = false;
    level = 0;
    gameSeq = [];
}

const sounds = {
    gameOver: new Audio("JavaScript_Apna/JS_Project/SimonGame/sounds/red.mp3")
}

*/