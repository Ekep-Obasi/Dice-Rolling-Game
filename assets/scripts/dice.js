const rollButton = document.querySelector("#rollButton");
const currentRollElement = document.querySelector(".currentRoll");
const currentRollTotalElement = document.querySelector(".currentRollingTotal");
const gameReslutElement = document.querySelector(".game");
const gameReset = document.querySelector(".reset-button");

let rollSum = 0;
let rollCount = 0;
rollButton.addEventListener("click", () => {
  const roll = Math.floor(Math.random() * 6) + 1;
  currentRollElement.innerHTML = roll;
  rollSum += roll;
  currentRollTotalElement.innerHTML = rollSum;
  rollCount += 1;
  if (rollCount == 3) {
    rollButton.disabled = true;
    let solution = "";
    if (rollSum > 8) {
      solution = "You win";
      gameReslutElement.innerHTML = solution;
    } else if (rollSum < 8) {
      solution = "You Lose";
      gameReslutElement.innerHTML = solution;
    } else {
      solution = "JackPot";
      gameReslutElement.innerHTML = solution;
    }
  }
});
gameReset.addEventListener("click", () => {
  roll = null;
  currentRollElement.innerHTML = roll;
  rollSum = null;
  currentRollTotalElement.innerHTML = rollSum;
  solution = "";
  gameReslutElement.innerHTML = solution;
  rollButton.disabled = false;
});
