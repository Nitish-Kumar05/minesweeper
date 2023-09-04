const grid = document.querySelector(".grid");
let width = 10;
let squares = [];

// To create board for the game
const createBoard = () => {
  for (let i = 0; i < width * width; i++) {
    const square = document.createElement("div");
    square.setAttribute("id", i);
    grid.appendChild(square);
    squares.push(square);
  }
};

createBoard();
