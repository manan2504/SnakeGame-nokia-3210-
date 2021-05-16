// game const and vairable 
let inputDir = { x: 0, y: 0 };
let foodsound = new Audio('music/food.mp3');
let gameoversound = new Audio('music/gameover.mp3');
let movesound = new Audio('music/move.mp3');
let musicsound = new Audio('music/music.mp3');
let speed = 2;
let score = 0;
let lastPainTime = 0;
let snakeArr = [
    { x: 13, y: 15 }
]
food = { x: 6, y: 7 };


// game functions
function main(ctime) {
    window.requestAnimationFrame(main);
    // console.log(ctime);
    if ((ctime - lastPainTime) / 1000 < 1 / speed) {
        return;
    }
    lastPainTime = ctime
    gameEngine();
}
function isCollide(sarr) {
    return false;

}

function gameEngine() {
    // -1 updateing the snake array
    if (isCollide(snakeArr)) {
        gameoversound.play();
        musicsound.pause();
        inputDir = { x: 0, y: 0 };
        alert("Game over. press any key to play again");
        snakeArr = [{ x: 13, y: 15 }];
        musicsound.play();
        score = 0;
    }

    // if the snake has eatten the food then increment the score and regenerate the food at random location
if(snakeArr[0].y === food.y && snakeArr[0].x === food.x){
    snakeBody.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y})
    food = {x: math.round(a + (b - a)+ math.random())}
}

    // -2 render Or display  the snake and food 

    // showing the snake 
    backboard.innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if (index === 0) {
            snakeElement.classList.add('head')
        }
        else {
            snakeElement.classList.add('snake');
        }
        backboard.appendChild(snakeElement);
    });

    // showing the food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    backboard.appendChild(foodElement);



}


// main logic starts here
window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    inputDir = { x: 0, y: 1 } //start teh game with any buttons
    movesound.play();

    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp")
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown":
            console.log("ArrowDown")
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft")
            inputDir.x = -1;
            inputDir.y = 0;
            break;

        case "ArrowRight":
            console.log("ArrowRight")
            inputDir.x = 1;
            inputDir.y = 0;
            break;

        default:
            break;
    }
})


