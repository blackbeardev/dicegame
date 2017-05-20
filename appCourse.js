/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//Create a variables to capture the scores and dice value
var scores, roundScores, activePlayer, gamePlaying;


//Create a function to switch the activePlayer.
function switchPlayer() {
  var score0 = document.getElementById("score-0");

  var score1 = document.getElementById("score-1");

  var current0 = document.getElementById("current-0");

  var current1 = document.getElementById("current-1");

  //Next player becomes the active player and roundScore is set back to zero
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  current0.textContent = "0";
  current1.textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  document.querySelector(".dice").style.display = "none";
}

//Create the resetScores fucntion which will make all scores revert back to 0,etc
function resetScores() {
  gamePlaying = true;
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;

  //Set the default display styling of the dice class element to be none.
  var diceIcon = document.querySelector(".dice");
  diceIcon.style.display = "none";

  //Set the textContent of the ids score-0 and score-1 and current-0 and current-1 to be 0
  var score0 = document.getElementById("score-0");
  score0.textContent = "0";
  var score1 = document.getElementById("score-1");
  score1.textContent = "0";
  var current0 = document.getElementById("current-0");
  current0.textContent = "0";
  var current1 = document.getElementById("current-1");
  current1.textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}

//Call the resetScores function
resetScores();

//Event handler for when the  roll dice button is clicked
document.querySelector(".btn-roll").addEventListener("click", function() {
  if(gamePlaying) {
    //1. Generate a random number
    var dice = Math.floor(Math.random() * 6) + 1;

    //2. Display the random number
    diceIcon = document.querySelector(".dice");
    //Change the display styling from none to block
    diceIcon.style.display = "block";
    //Show the correct image
    diceIcon.src = "dice-" + dice + ".png";

    //Update the round score IF the rolled number !1
    if(dice !== 1) {
      //Add to the score
      roundScore += dice;
      //Display in the user interface
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
    } else {
        //Switch to the next player
      switchPlayer();
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
  if(gamePlaying) {
    //Add current score to players global score
    scores[activePlayer] += roundScore;

    //Update UI to show the players global score1
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

      //Check if the player has won the game
      if(scores[activePlayer] >= 50) {
        //Put a message in the UI saying who won
        document.querySelector("#name-" + activePlayer).textContent = "Winner!!!";
        //Hide the dice
        document.querySelector(".dice").style.display = "none";
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
        gamePlaying = false;
      } else {
        //Switch to the next player
        switchPlayer();
      }
  }
});

//Set up the event listener for when the new game button is clicked and call teh resetScores function
document.querySelector(".btn-new").addEventListener("click", resetScores);
