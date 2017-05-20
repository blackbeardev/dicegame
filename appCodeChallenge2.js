//Initialise scores, roundScore, activePlayer variables
var scores, roundScore, activePlayer, gamePlaying, userSetScore, setScoreBtn, winningScore;

//Create the initGame function
function initGame() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.querySelector("#scoreInput").value = " ";




  //Set the currentScores and scores to 0
  document.querySelector("#current-0").textContent = "0";
  document.querySelector("#current-1").textContent = "0";
  document.querySelector("#score-0").textContent = "0";
  document.querySelector("#score-1").textContent = "0";

  document.querySelector("#name-" + activePlayer).textContent = "Player" + " " + (activePlayer + 1);
  document.querySelector(".player-0-panel").classList.add("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  //Hide the dice
  document.querySelector(".dice").style.display = "none";
}
//Call the initGame function
initGame();

//Create the switchPlayer function
function switchPlayer() {
  //Set the currentScores back to 0
  document.querySelector("#current-0").textContent = "0";
  document.querySelector("#current-1").textContent = "0";
  roundScore = 0;

  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  document.querySelector(".dice").style.display = "none";
}



//Create an event listener for when the user clicks on the roll dice button
var rollDice = document.querySelector(".btn-roll");

rollDice.addEventListener("click", function() {
  rollsArray = [];
  if(gamePlaying) {

    //Create a random number
    var randomNumber = Math.floor(Math.random() * 6) + 1;


    //Make the textContent of the dice class element show the value of the randomNumber
    var dice = document.querySelector(".dice");

    dice.src = "dice-" + randomNumber + ".png";

    //Show the dice
    dice.style.display = "block";

    //Check if the number rolled isn't 1
    if(randomNumber != 1) {
      roundScore += randomNumber;
      //Put this number in the activePlayer's current score
      document.querySelector("#current-" + activePlayer).textContent = roundScore;
    } else {
      switchPlayer();
    }
  }
});

//Get the value of the scoreInput field

userSetScore = document.querySelector("#scoreInput");

setScoreBtn = document.querySelector("#setTopScore");

//Create the event handler to capture the user input when the submit button is clicked
setScoreBtn.addEventListener("click", function() {
  winningScore = Number(userSetScore.value);
  console.log(winningScore);
})

//Create the event handler for when the hold button is clicked
var holdBtn = document.querySelector(".btn-hold");

holdBtn.addEventListener("click", function() {
  document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer] += roundScore;
  document.querySelector("#current-" + activePlayer).textContent = "0";
  if(scores[activePlayer] >= winningScore) {
    document.querySelector("#name-" + activePlayer).textContent = "Winner!";
    document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
    document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
    gamePlaying = false;
  } else {
      switchPlayer();
  }
});

//Create the event listener for when the new game button is clicked
var newGame = document.querySelector(".btn-new");
newGame.addEventListener("click", initGame);
