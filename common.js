
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


  function extractNewData(){
    var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

    var currentSplited = stations.join(";");
    var separateArray = currentSplited.split(";");
    var newArr = [];
    var secArr =[];
      for(var i = 0; i < stations.length; i++){  
        
        var current = stations[i].slice(0, 3);
        newArr.push(current);
    }

      for(var j = 0 ; j < separateArray.length; j++ ){
       if (j%2 != 0 && j!= 0){
        secArr.push(separateArray[j]);
        }
     }
   //  alert(secArr);
     for( var a = 0; a < secArr.length; a ++){
        var newList = document.createElement('li');
        newList.textContent += newArr[a] + " : " +  secArr[a] + " ";

        list.appendChild(newList);
    }

  }
  extractNewData();