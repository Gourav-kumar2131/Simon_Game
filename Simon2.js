let gameSeq = [];
let userSeq = [];

let buttons = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

// Sounds associated with each color and game over
const sounds = {
    yellow: new Audio("sounds/red.mp3"),
    red: new Audio("sounds/red.mp3"),
    purple: new Audio("sounds/red.mp3"),
    green:new Audio("sounds/red.mp3"),
    seqSound: new Audio("sounds/System.mp3"),
    gameOver:new Audio("sounds/gameOver.mp3")
};

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game Started");
        started = true;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");

    // Play sound when the button is flashed
    playSound("seqSound");

    setTimeout(function () {
        btn.classList.remove("flash");
    }, 500);
}

function userFlash(btn) {
    btn.classList.add("userflash");

    // Play sound when the button is clicked by the user
    playSound(btn.getAttribute("id"));

    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 500);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randindx = Math.floor(Math.random() * 4); // 0-3
    let randcolor = buttons[randindx];
    let randBtn = document.querySelector(`.${randcolor}`);

    gameSeq.push(randcolor);

    gameFlash(randBtn);
}

function buttonPress() {
    let btn = this;
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    userFlash(btn);
    checkSeq(userSeq.length - 1);
}

let btnAll = document.querySelectorAll(".btn");
for (btn of btnAll) {
    btn.addEventListener("click", buttonPress);
}

function checkSeq(index) {
    if (userSeq[index] === gameSeq[index]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
        console.log("Same Value");
    } else {
        // Play game over sound
        setTimeout(function () {
            playSound("gameOver");
        }, 200);

        h2.innerText = `Game Over! Press any key to start`;
        resetGame();
    }
}

// Function to play sound based on button color or event (game over)
function playSound(color) {
    sounds[color].play();
}

// Reset the game after game over
function resetGame() {
    started = false;
    level = 0;
    gameSeq = [];
}
