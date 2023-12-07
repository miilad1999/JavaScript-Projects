"use stric";
const score0E = document.getElementById("score_0");
const score1E = document.getElementById("score_1");
const current0 = document.getElementById("current_0");
const current1 = document.getElementById("current_1");
const dice = document.querySelector(".dice");
const btnNewGame = document.querySelector(".new_game");
const btnRoll = document.querySelector(".roll");
const btnHold = document.querySelector(".hold");
const player0 = document.querySelector(".player_0");
const player1 = document.querySelector(".player_1");

let scores, currentScore, playerActive, playing;

const init = function () {
  score0E.textContent = 0;
  score1E.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  dice.classList.add("hidden");
  scores = [0, 0];
  currentScore = 0;
  playerActive = 0;
  playing = true;
  player0.classList.remove("player_winner");
  player1.classList.remove("player_winner");
  player0.classList.add("player_active");
  player1.classList.remove("player_active");
};
init();
const switchPlayer = function () {
  document.getElementById(`current_${playerActive}`).textContent = 0;
  currentScore = 0;
  playerActive = playerActive === 0 ? 1 : 0;
  player0.classList.toggle("player_active");
  player1.classList.toggle("player_active");
};

//rolling dice
btnRoll.addEventListener("click", function () {
  if (playing) {
    let diceNumber = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove("hidden");
    dice.src = `dice_${diceNumber}.png`;

    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.getElementById(`current_${playerActive}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[playerActive] += currentScore;

    document.getElementById(`score_${playerActive}`).textContent =
      scores[playerActive];
    if (scores[playerActive] >= 20) {
      playing = false;
      document
        .querySelector(`.player_${playerActive}`)
        .classList.add("player_winner").textContent = "you win the game";
      document
        .querySelector(`.player_${playerActive}`)
        .classList.remove("playerActive");
    } else {
      switchPlayer();
    }
  }
});
btnNewGame.addEventListener("click", init);
