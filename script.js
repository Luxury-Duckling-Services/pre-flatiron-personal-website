const striker = document.getElementById("striker");
const keeper = document.getElementById("keeper");
const ball = document.getElementById("ball");

let carry = true;
let gameOn = false;

function moveKeeperLeft() {
    const keeperLeftNumbers = keeper.style.left.replace("px", "");
    const keeperLeft = parseInt(keeperLeftNumbers, 10);

    if (keeperLeft > 0) {
      keeper.style.left = `${keeperLeft - 2}px`;
    }
}

function moveKeeperRight() {
    const keeperLeftNumbers = keeper.style.left.replace("px", "");
    const keeperLeft = parseInt(keeperLeftNumbers, 10);

    if (keeperLeft < 230) {
      keeper.style.left = `${keeperLeft + 2}px`;
    }
}

const action = setInterval(moveBallUp, 6);

document.addEventListener("keydown", function (e) {
    if (e.key === 'x' && gameOn === false) {
        carry = false;
        gameOn = true;
        action;
    }
    
    if (e.key === "ArrowRight") {        
        moveKeeperRight();
    }

    if (e.key === "ArrowLeft") {        
        moveKeeperLeft();
    }

    if (e.key === "w") {        
        moveStrikerUp();
    }

    if (e.key === "a") {        
        moveStrikerLeft();
    }

    if (e.key === "s") {        
        moveStrikerDown();
    }

    if (e.key === "d") {        
        moveStrikerRight();
    }

});

function moveStrikerLeft() {
    const strikerLeftNumbers = striker.style.left.replace("px", "");
    const strikerLeft = parseInt(strikerLeftNumbers, 10);

    if (strikerLeft > 0) {
        if (carry === true) {
            striker.style.left = `${strikerLeft - 5}px`;
            ball.style.left = `${strikerLeft}px`;
        } else {
            striker.style.left = `${strikerLeft - 5}px`;
        }
    }
}

function moveStrikerRight() {
    const strikerLeftNumbers = striker.style.left.replace("px", "");
    const strikerLeft = parseInt(strikerLeftNumbers, 10);

    if (strikerLeft < 230) {
        if (carry === true) {
            striker.style.left = `${strikerLeft + 5}px`;
            ball.style.left = `${strikerLeft + 10}px`;
        } else {
            striker.style.left = `${strikerLeft + 5}px`;
        }
    }
}

function moveStrikerUp() {
    const strikerBottomNumbers = striker.style.bottom.replace("px", "");
    const strikerBottom = parseInt(strikerBottomNumbers, 10);

    if (strikerBottom < 320) {
        if (carry === true) {
            striker.style.bottom = `${strikerBottom + 5}px`;
            ball.style.bottom = `${strikerBottom + 10}px`;
        } else {
            striker.style.bottom = `${strikerBottom + 5}px`;
        }
    }
}

function moveStrikerDown() {
    const strikerBottomNumbers = striker.style.bottom.replace("px", "");
    const strikerBottom = parseInt(strikerBottomNumbers, 10);

    if (strikerBottom > 0) {
        if (carry === true) {
            striker.style.bottom = `${strikerBottom - 5}px`;
            ball.style.bottom = `${strikerBottom}px`;
        } else {
            striker.style.bottom = `${strikerBottom - 5}px`;
        }
    }
}

function moveBallUp() {
    const ballBottomNumbers = ball.style.bottom.replace("px", "");
    const ballBottom = parseInt(ballBottomNumbers, 10);

    const ballLeftNumbers = ball.style.left.replace("px", "");
    const ballLeft = parseInt(ballLeftNumbers, 10);

    const keeperLeftNumbers = keeper.style.left.replace("px", "");
    const keeperLeft = parseInt(keeperLeftNumbers, 10);

    if (gameOn ===true){

    if (ballBottom <= 350) {
        ball.style.bottom = `${ballBottom + 1}px`;
    } else if (ballBottom <= 380 ) {
        if (ballLeft > keeperLeft - 10 && ballLeft < keeperLeft + 20) {
            alert(`Saved!`);
            intialPos();
            block += 1;
            h3.textContent = `The striker has scored ${score} times and missed ${miss} times, while the goalkeeper have made ${block} saves.`;
        } else {
            ball.style.bottom = `${ballBottom + 1}px`;
        }
    } else {
        if (75 <= ballLeft && ballLeft <= 165){
            alert(`Goal!`);
            intialPos();
            score += 1;
            h3.textContent = `The striker has scored ${score} times and missed ${miss} times, while the goalkeeper have made ${block} saves.`;
        } else {
            alert(`Missed!`);
            intialPos();
            miss += 1;
            h3.textContent = `The striker has scored ${score} times and missed ${miss} times, while the goalkeeper have made ${block} saves.`;
        }
    }
    
    }
}

function intialPos() {
    keeper.style.bottom = `360px`;
    striker.style.bottom = `60px`;
    ball.style.bottom = `65px`;

    keeper.style.left = `115px`;
    striker.style.left = `115px`;
    ball.style.left = `120px`;
    
    carry = true;
    gameOn = false;
}