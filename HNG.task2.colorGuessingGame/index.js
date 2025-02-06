const colorOption = document.querySelector("#colorOption");
const colorBox = document.querySelector(".colorBox");
const gameStatus = document.querySelector("#gameStatus");
const scoreDisplay = document.querySelector("#score");

const newGameButton = document.querySelector(".newGameButton");
let optionsList = [];
let hiddenColor;
let correctIndex;
let score = 0;

for (let index = 0; index < 6; index++) {
  const option = document.createElement("div");
  option.classList.add("options");
  option.dataset.testid = "colorOption";
  colorOption.appendChild(option);
  optionsList.push(option);
}

function generateRandomColors() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
}

function setColorBox() {
  colorBox.style.backgroundColor = hiddenColor;
}

function assignColors() {
  optionsList.forEach((option, index) => {
    if (index === correctIndex) {
      option.dataset.color = hiddenColor;
      option.style.backgroundColor = hiddenColor;
    } else {
      let randomColor = generateRandomColors();
      option.dataset.color = randomColor;
      option.style.backgroundColor = randomColor;
    }
  });
}

function startGame() {
  hiddenColor = generateRandomColors();
  correctIndex = Math.floor(Math.random() * 6);

  setColorBox();
  assignColors();
  gameStatus.textContent = "Pick the correct color!";

  optionsList.forEach((option) => {
    option.style.pointerEvents = "auto";
  });
}

function triggerEmoji(isCorrect) {
  const emojiContainer = document.getElementById("emojiContainer");

  const emoji = document.createElement("div");
  emoji.classList.add("emoji");

  if (isCorrect) {
    emoji.textContent =
      "🌸  🌸  🌸  🌸  🌸  🌸  🌸  🌸  🌸  🌸  🌸  🌸  🌸  🌸  🌸  🌸  🌸  🌸  🌸  🌸  🌸  🌸  🌸  🌸  🌸🌸 ";
  } else {
    emoji.textContent =
      "😟  😟  😟  😟  😟 😟  😟  😟  😟  😟  😟 😟  😟  😟  😟  😟 😟  😟  😟  😟  😟 😟  😟  😟  😟😟  ";
  }

  emojiContainer.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 2000);
}

optionsList.forEach((option) => {
  option.addEventListener("click", function () {
    let selectedColor = option.dataset.color;

    optionsList.forEach((opt) => (opt.style.pointerEvents = "none"));

    if (selectedColor === hiddenColor) {
      gameStatus.textContent = "🎉 Correct!";
      score++;
      scoreDisplay.textContent = score;
      triggerEmoji(true);
    } else {
      gameStatus.textContent = "😟 Wrong! Try again next round.";
      triggerEmoji(false);
    }

    colorBox.style.backgroundColor = hiddenColor;

    setTimeout(startGame, 2000);
  });
});

function resetGame() {
  score = 0;
  scoreDisplay.textContent = score;

  setColorBox();
  assignColors();
  startGame();
}

newGameButton.addEventListener("click", resetGame);

startGame();
