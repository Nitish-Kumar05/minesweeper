const grid = document.querySelector(".grid");
let width = 10;
let landMines = 20;
let squares = [];

// To create board for the game
const createBoard = () => {
  // this will shuffle the land mines
  const minesArray = Array(landMines).fill("mine");
  const emptyArray = Array(width * width - landMines).fill("valid");
  const gameArray = emptyArray.concat(minesArray);
  const shuffledArray = gameArray.sort(() => Math.random() - 0.5);

  for (let i = 0; i < width * width; i++) {
    const square = document.createElement("div");
    square.setAttribute("id", i);
    grid.appendChild(square);
    squares.push(square);
  }
};

createBoard();
