"use strict";
let number = Math.trunc(Math.random() * 40) + 1;
let score = 40;
let highscore = 0;
const disalyMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".number").textContent = number;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    disalyMessage(" No number!⛔️");
  } else if (guess === number) {
    disalyMessage("Correct Number 🥳🎉");
    document.querySelector("main").style.backgroundColor = "#83c866";
    document.querySelector(".again").style.color = "#ef0000";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      disalyMessage(guess > number ? " Too high 📈" : " Too low 📉");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      disalyMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 40;
  number = Math.trunc(Math.random() * 40) + 1;
  disalyMessage("Start guessing... ");
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("main").style.backgroundColor = "#c89666";
});
