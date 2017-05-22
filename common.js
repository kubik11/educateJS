var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
var but = document.querySelector('button');
var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var resetButton;




guessSubmit.addEventListener('click', validator); 
function checkGuess(){
	var randomNumber = Math.floor(Math.random() * 100) + 1;

	if(guessCount>10){
		reset();
	}
	var userGuess = Number(guessField.value);
	if(guessCount === 1){
		guesses.textContent = 'Previous guess:';
	}
	 guesses.textContent += userGuess + ' ';

	if(userGuess > randomNumber){
		lowOrHi.textContent = 'Too Hight';
		lowOrHi.style.background = "red";
	}
	else if(userGuess < randomNumber){
		lowOrHi.textContent = 'Too Low';
		lowOrHi.style.background = "blue";
	}
	else{
		lowOrHi.textContent = 'You are reveal! Number'+" "+ userGuess+ "is true!!";
		lowOrHi.style.background = 'green';
		gameOver();
	}
	guessCount ++;
	guessField.value = "";
	guessField.focus();
}

function gameOver(){
	guesses.textContent = " ";
	guessCount = 1;
}

function validator(){
	var userGuess = Number(guessField.value);
	if (!isNaN(userGuess)){
		checkGuess();
	}
	else{
		guessField.value = "";
		guessField.focus();
	}
}

function reset(){
	 guessField.disabled = true;
	 guessSubmit.disabled = true;
	 var button = document.createElement('button');
	 button.textContent = 'Start new game';
	 button.classList.add('my');
	 document.body.appendChild(button);
	 button.addEventListener('click', newGame);
}

function newGame(){
	guessField.disabled = false;
	guessSubmit.disabled = false;
	var button = document.querySelector('.my');
	//button.style.display = 'none';
	button.remove();
	lowOrHi.textContent = " ";
	guesses.textContent = " ";
	guessCount = 1;
	guessField.focus();
}