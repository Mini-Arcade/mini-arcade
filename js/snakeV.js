

//First create canvas and append it to the body

let domReplay = document.querySelector("#replay");
let domScore = document.querySelector("#score");
let domCanvas = document.createElement("canvas");
document.querySelector("#canvas").appendChild(domCanvas);

//CTX is the context of the canvas.
const CTX = domCanvas.getContext("2d");

const W = (domCanvas.width = 600);
const H = (domCanvas.height = 600);

//Create snake

//COMMENT: Now create a class that will be used to track the length of the snake.
//This class will have a cnstructor that will take in the x and y coordinates of the snake.

class SnakePart {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

//First thing to set up, is the game loop.
//NOTE: The game loop is a function that runs every frame of the game or continuously updates the screen.

// There are three ways to create a game loop:
// 1. setInterval(function, time) - runs the function every time the time is reached.
// 2. requestAnimationFrame(function) - runs the function every time the browser is ready to draw the next frame.
// 3. setTimeout(function, time) - runs the function after the time is reached. This is useful for things that need to be done after a certain amount of time.

//NOTE: First of first is to create a variable called speed that will be used to determine the speed of the game.
//COMMENT: Create a viriable called tileCount that will be used to determine the number of tiles in the game.
//NOTE: For our snake, create a viriable called headX and headY that will be used to determine the position of the head of the snake.
//COMMENT: Create a viriable called tileSize that will be used to determine the size of the tiles in the game.

let speed = 7;
let tileCount = 20;
let tileSize = domCanvas.width / tileCount;
let headX = 10;
let headY = 10;

const snakeParts = [];
let tailLength = 0;

//NOTE: To move the snake, we need to set two variables that will be used to determine the direction of the snake.

let xVelocity = 0;
let yVelocity = 0;

//COMMENT: Now add something that will be eaten by the snake.

let foodX = 5;
let foodY = 5;

//COMMENT: create a variable that will keep track of the score.
let score = 0;

//: check if highscore is in local storage.
function checkHighScore() {
	if (localStorage.getItem("highscore") === null) {
		localStorage.setItem("highscore", 0);
	}
	if (localStorage.getItem("score") === null) {
		localStorage.setItem("score", 0);
	}
}

//COMMENT: Create an audio object that will be used to play sound when the snake eats the food.
const gulpAudio = new Audio("../audio/gulp.mp3");
const startGame = new Audio("../audio/StartGame.wav");
const theGameOver = new Audio("../audio/gameOver.mp3");

//COMMENT: Just before drawin the snake, change the position of the snake when the keys are pressed.
//NOTE: Check if snake collides or eats food. This is done by checking if the snake's head is in the same position as the food.
//Check if gameover is true.

function drawGame() {
	changeSnakePosition();
	//This part if the function will check if the game is over. In coding terminology, if result is true, then the game is over.
	let result = isGameOver();
	if (result) {
		return;
	}
	clearScreen();
	checkFoodCollision();
	drawFood();
	drawSnake();

	//NOTE: Increase the speed of the game by increasing the speed variable.
	//write a switch statement to change the speed of the game.
	switch (score) {
		case 10:
			speed = 10;
			break;
		case 20:
			speed = 12;
			break;
		case 30:
			speed = 18;
			break;
		case 40:
			speed = 25;
			break;
		case 50:
			speed = 35;
			break;
		case 60:
			speed = 50;
			break;
		default:
			break;
	}

	setTimeout(drawGame, 1000 / speed);
}

//This function will clear the screen every time the game loop is called.
function clearScreen() {
	//fillStyle is used to set the color of the fill.
	CTX.fillStyle = "black";
	//fillRect is used to fill a rectangle.
	//The first two parameters are the x and y coordinates of the top left corner of the rectangle.
	//The next two parameters are the width and height of the rectangle.
	CTX.fillRect(0, 0, W, H);
}

//COMMENT: Now draw the snake of the game.
function drawSnake() {
	CTX.fillStyle = "orange";
	CTX.fillRect(headX * tileSize, headY * tileSize, tileSize, tileSize);

	//COMMENT: Now draw the tail of the snake.
	CTX.fillStyle = "green";
	for (let i = 0; i < snakeParts.length; i++) {
		let part = snakeParts[i];
		CTX.fillRect(part.x * tileSize, part.y * tileSize, tileSize, tileSize);
	}

	//NOTE: The way to make sure that the snakeParts are added to the snake is by using the push method.This is going to draw the tail where the head was.
	snakeParts.push(new SnakePart(headX, headY));
	//NOTE: Now remove the oldest part of the snake.
	if (snakeParts.length > tailLength) {
		snakeParts.shift();
	}
}
//NOTE: Create a function that will change the position of the snake.
function changeSnakePosition() {
	headX = headX + xVelocity;
	headY = headY + yVelocity;
}

//COMMENT: Now create a function that will move the snake.
document.addEventListener("keydown", keyDown);
function keyDown(e) {
	//each key has a keyCode.
	//up = 38
	if (e.keyCode == 38) {
		//to prevent the snake from moving moving from left to right.
		if (yVelocity == 1) return;
		yVelocity = -1;
		xVelocity = 0;
	} //down = 40
	else if (e.keyCode == 40) {
		if (yVelocity == -1) return;
		yVelocity = 1;
		xVelocity = 0;
	} //left = 37
	else if (e.keyCode == 37) {
		if (xVelocity == 1) return;
		xVelocity = -1;
		yVelocity = 0;
	} //right = 39
	else if (e.keyCode == 39) {
		if (xVelocity == -1) return;
		xVelocity = 1;
		yVelocity = 0;
	}
}

//COMMENT: Now create a function that will draw the food.
function drawFood() {
	CTX.fillStyle = "red";
	CTX.fillRect(foodX * tileSize, foodY * tileSize, tileSize, tileSize);
}

//COMMENT: Check if the snake collides with the food.
function checkFoodCollision() {
	if (headX == foodX && headY == foodY) {
		//Change the position of the food and increase the length of the snake.
		tailLength++;
		score++;
		localStorage.setItem("score", score);
		//check if local highscore is less than score.
		if (localStorage.getItem("highscore") < score) {
			localStorage.setItem("highscore", score);
		}

		gulpAudio.play();
		domScore.innerHTML = score;
		foodX = ~~(Math.random() * tileCount);
		foodY = ~~(Math.random() * tileCount);
	}
}

//COMMENT: Check if function is game over.

function isGameOver() {
	let gameOver = false;
	//Check if the snake is out of bounds.
	if (headX < 0 || headY < 0) {
		theGameOver.play();
		gameOver = true;
	}
	//Check if the snake collides with the wall.
	else if (headX === tileCount || headY === tileCount) {
		console.log("Game over 2");
		theGameOver.play();
        
		gameOver = true;
		//Check if the snake collides with itself.
	} else if (snakeParts.some((part) => part.x === headX && part.y === headY)) {
		console.log("Game over 3");
		theGameOver.play();

		gameOver = true;
	}
	///Now some text will be displayed on the screen.
	if (gameOver) {
		CTX.fillStyle = "white";
		CTX.font = "80px Verdana";

		let gradient = CTX.createLinearGradient(0, 0, W, H);
		gradient.addColorStop("0", "magenta");
		gradient.addColorStop("1.0", "blue");
		gradient.addColorStop("0.2", "red");

		//COMMENT: Now draw the text.
		CTX.fillStyle = gradient;

		CTX.fillText("Game Over", W / 2 - 200, H / 2);

		CTX.font = "30px Verdana";

        CTX.fillText("Score: " + score, W / 2 - 200, H / 2 + 50);
        CTX.fillText("Your HighScore: " + localStorage.getItem('highscore'), W / 2 - 200, H / 2 + 100);
		CTX.fillText('Leaderboard Position: ' + '2', W / 2 - 200, H / 2 + 150);

		return true;
	}

	return false;
}

drawGame();
checkHighScore();

//COMMENT: create an event listener that will reset the game.

domReplay.addEventListener("click", function () {
    startGame.play();
	location.reload();
    //create an audio start play when the replay button is clicked.
});
