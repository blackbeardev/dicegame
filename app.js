/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//Create a variables to capture the scores and dice value
var playerOneScore, playerTwoScore, roundScores, activePlayer;

playerOneScore = 0;
playerTwoScore = 0;
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


//Event handler for when the  roll dice button is clicked
document.querySelector(".btn-roll").addEventListener("click", function() {
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
    //Otherwise cancel score and go to the next player
    roundScore = 0;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
      //Change the activePlayer to equal the other player's number(ie. 0 or 1)
      if(activePlayer === 0) {
        activePlayer = 1;
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.add("active");
        //Hide the dice
        // diceIcon.style.display = "none";
      } else {
        activePlayer = 0;
        document.querySelector(".player-1-panel").classList.toggle("active");
        document.querySelector(".player-0-panel").classList.add("active");
        //Hide the dice
        // diceIcon.style.display = "none";
      }
  }
});

//Set an eventhandler for when the hold button is clicked
document.querySelector(".btn-hold").addEventListener("click", function() {
  if(activePlayer === 0) {
    playerOneScore += roundScore;
    activePlayer = 1;
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.add("active");
    current0.textContent = "0";
    score0.textContent = playerOneScore;
    diceIcon.style.display = "none";
    roundScore = 0;
  } else {
    playerTwoScore += roundScore;
    activePlayer = 0;
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
    score1.textContent = playerTwoScore;
    current1.textContent = "0";
    diceIcon.style.display = "none";
    roundScore = 0;
  }
});
