
  var guesses = document.querySelector('.guesses');
  var lastResult = document.querySelector('.lastResult');
  var lowOrHi = document.querySelector('.lowOrHi');
  var guessSubmit = document.querySelector('.guessSubmit');
  var guessField = document.querySelector('.guessField');
  var list = document.querySelector('.list ');
  var guessCount = 1;
  var resetButton;
  function checkGuess() {
 	var randomNumber = Math.floor(Math.random()*100) + 1;
    var userGuess = Number(guessField.value);
    if(guessCount === 1) {
      guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';
 
    if(userGuess === randomNumber) {
      lastResult.textContent = 'Congratulations! You got it right!';
      lastResult.style.backgroundColor = 'green';
      lowOrHi.textContent = '';
      setGameOver();
    } else if(guessCount === 10) {
      lastResult.textContent = '!!!GAME OVER!!!';
      setGameOver();
    } else {
      lastResult.textContent = 'Wrong!';
      lastResult.style.backgroundColor = 'red';
      if(userGuess < randomNumber) {
        lowOrHi.textContent = 'Last guess was too low!';
      } else if(userGuess > randomNumber) {
        lowOrHi.textContent = 'Last guess was too high!';
      }
    }
 
    guessCount++;
    guessField.value = '';
    guessField.focus();
  }
  guessSubmit.addEventListener('click', checkGuess);
  
  function setGameOver() {
	  guessField.disabled = true;
	  guessSubmit.disabled = true;
	  resetButton = document.createElement('button');
	  resetButton.textContent = 'Start new game';
	  document.body.appendChild(resetButton);
	  resetButton.addEventListener('click', resetGame);
  }
  
  function resetGame() {
	  guessCount = 1;
	
	  var resetParas = document.querySelectorAll('.resultParas p');
	  for(var i = 0; i < resetParas.length; i++) {
		  resetParas[i].textContent = '';
	  }
	  resetButton.parentNode.removeChild(resetButton);
	
	  guessField.disabled = false;
	  guessSubmit.disabled = false;
	  guessField.value = '';
	  guessField.focus();
	
	  lastResult.style.backgroundColor = 'white';
	
	 // randomNumber = Math.floor(Math.random()) + 1;
  }

  function sortList(){
   var arr = [ 'Happy Birthday!',
            ' Merry Christmas my love',
            'A happy Christmas to all the family',
             'Youre all I want for Christmas',
              ' Get well soon'
              ];
     for(var i = 0; i < arr.length; i++){
      if(arr[i].indexOf('Christmas') >= 1){
        var newLi = document.createElement('li');
        newLi.textContent = arr[i];
        list.appendChild(newLi);
      }
    }
  }

  sortList();