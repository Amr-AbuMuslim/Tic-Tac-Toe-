// ----------------------------------------------------------
// Tic Tac Toe Game with Js
let title = document.querySelector(".header");
let winnerVoice = document.querySelector(".winner");
let currentPlayer = document.querySelector(".current span");
let oulVoice = document.querySelector(".oul");
let tile = document.querySelectorAll(".tile");
let player = "X"; // check for choose the charachter for first hit ******* to do
let winner;
let gameOver = false;
function endGame(index1, index2, index3) {
  winner = tile[index1].textContent;
  tile[index1].classList.add("winner");
  tile[index2].classList.add("winner");
  tile[index3].classList.add("winner");
  title.textContent = "Winner is " + winner;
  winnerVoice.play();
  setInterval(() => {
    title.textContent += ".";
  }, 2000);
  setTimeout(() => location.reload(), 6000);
}
function checkWinner() {
  // check for winner
  if (
    tile[0].textContent === tile[1].textContent &&
    tile[1].textContent === tile[2].textContent &&
    tile[0].textContent != ""
  ) {
    endGame(0, 1, 2);
    gameOver = true;
  }
  if (
    tile[3].textContent === tile[4].textContent &&
    tile[4].textContent === tile[5].textContent &&
    tile[3].textContent != ""
  ) {
    endGame(3, 4, 5);
    gameOver = true;
  }
  if (
    tile[6].textContent === tile[7].textContent &&
    tile[7].textContent === tile[8].textContent &&
    tile[6].textContent != ""
  ) {
    endGame(6, 7, 8);
    gameOver = true;
  }
  // check vertically
  if (
    tile[0].textContent === tile[3].textContent &&
    tile[3].textContent === tile[6].textContent &&
    tile[0].textContent != ""
  ) {
    endGame(0, 3, 6);
    gameOver = true;
  }
  if (
    tile[1].textContent === tile[4].textContent &&
    tile[4].textContent === tile[7].textContent &&
    tile[1].textContent != ""
  ) {
    endGame(1, 4, 7);
    gameOver = true;
  }
  if (
    tile[2].textContent === tile[5].textContent &&
    tile[5].textContent === tile[8].textContent &&
    tile[2].textContent != ""
  ) {
    endGame(2, 5, 8);
    gameOver = true;
  }
  // check diagonally
  if (
    tile[0].textContent === tile[4].textContent &&
    tile[4].textContent === tile[8].textContent &&
    tile[0].textContent != ""
  ) {
    endGame(0, 4, 8);
    gameOver = true;
  }
  if (
    tile[2].textContent === tile[4].textContent &&
    tile[4].textContent === tile[6].textContent &&
    tile[2].textContent != ""
  ) {
    endGame(2, 4, 6);
    gameOver = true;
  }
  // check if all tiles are filled !1 *** to do
  if (
    tile[0].textContent != "" &&
    tile[1].textContent != "" &&
    tile[2].textContent != "" &&
    tile[3].textContent != "" &&
    tile[4].textContent != "" &&
    tile[5].textContent != "" &&
    tile[6].textContent != "" &&
    tile[7].textContent != "" &&
    tile[8].textContent != ""
  ) {
    oulVoice.play();
    setTimeout(() => {
      title.textContent = "OUL !!..";
      location.reload();
    }, 5000);
  }
  return gameOver;
}
function startGame() {
  // game Handling Logic
currentPlayer.textContent = player;
  tile.forEach((ele) => {
    ele.addEventListener("click", (event) => {
      // check is it empty or not ?
      let isGameOver = checkWinner();
      if (!isGameOver) {
        if (ele.textContent === "") {
          // assign the next player
          ele.textContent = player;
          player = player == "X" ? "O" : "X";
          currentPlayer.textContent = player;
          checkWinner();
        }
      }
      //
    });
  });
}
window.onload = startGame();
// ----------------------------------------------------------
