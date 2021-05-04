let computerGuess;
let userGuesses = [];
let attempts = 0;
let maxGuesses;

let low = 1;
let high = 100;

function updateRange(){
  const rangeOutput = document.getElementById("rangeOutput");
  rangeOutput.innerText = `${low} - ${high}`;
  rangeOutput.style.marginLeft = low + "%";
  rangeOutput.style.marginRight = 100 - high + "%";
  rangeOutput.classList.add("flash");

  const lowValue = document.getElementById("low");
  lowValue.style.flex = low + "%";

  const spaceValue = document.getElementById("space");
  spaceValue.style.flex = high - low + "%";

  const highValue = document.getElementById("high");
  highValue.style.flex = 100 - high + "%";
}

function newGame(){
  window.location.reload();
}

function gameEnded(){
  document.getElementById("newGameButton").style.display = "inline";
  document.getElementById('inputBox').setAttribute("readonly","readonly");
}

function init(){
  computerGuess = Math.floor(Math.random() * 100 + 1);
  console.log(computerGuess);
  document.getElementById("newGameButton").style.display = "none";
  document.getElementById("gameArea").style.display = "none";
}

function startGameView(){
  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
}

function easyMode(){
  maxGuesses = 10;
  startGameView();
}

function hardMode(){
  maxGuesses = 5;
  startGameView();
}

function compareGuess(){
  const userGuess = Number(document.getElementById("inputBox").value);
  userGuesses.push(" " + userGuess);
  document.getElementById("guesses").innerHTML = userGuesses;
  attempts++;
  document.getElementById("attempts").innerHTML = attempts;

  if (attempts < maxGuesses) {
    if (userGuess > computerGuess) {
      if (userGuess < high) {
        high = userGuess;
      }
      document.getElementById("textOutput").innerHTML = "Your guess is too high";
      document.getElementById("inputBox").value = "";
    }else if (userGuess < computerGuess) {
      if (userGuess > low) {
        low = userGuess;
      }
      document.getElementById("textOutput").innerHTML = "Your guess is too low";
      document.getElementById("inputBox").value = "";
    }else{
      document.getElementById("textOutput").innerHTML = "Correct! You got in " + attempts;
      gameEnded();
    }
  }else{
    if (userGuess > computerGuess || userGuess < computerGuess) {
      document.getElementById("textOutput").innerHTML = "YOU LOSE! The number was " + computerGuess;
      document.getElementById("inputBox").value = "";
      gameEnded();
    }else{
      document.getElementById("textOutput").innerHTML = "Correct! You got in " + attempts;
      gameEnded();
    }
  }

  updateRange();
}