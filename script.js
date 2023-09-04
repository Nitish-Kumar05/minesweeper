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

  // This loop will populate the mines and valids in grid
  for (let i = 0; i < width * width; i++) {
    const square = document.createElement("div");
    square.setAttribute("id", i);
    square.classList.add(shuffledArray[i]);
    grid.appendChild(square);
    squares.push(square);

    // click
    square.addEventListener("click", (e) => {
      click(square);
    });
  }

  // In here the numbers will be populated to remaining grids
  for (let i = 0; i < squares.length; i++) {
    let total = 0;
    const isLeftEdge = i % width === 0;
    const isRightEdge = i % width === width - 1;

    if (squares[i].classList.contains("valid")) {
      if (i > 0 && !isLeftEdge && squares[i - 1].classList.contains("mine"))
        total++;
      if (
        i > 9 &&
        !isRightEdge &&
        squares[i + 1 - width].classList.contains("mine")
      )
        total++;
      if (i > 10 && squares[i - width].classList.contains("mine")) total++;
      if (
        i > 11 &&
        !isLeftEdge &&
        squares[i - 1 - width].classList.contains("mine")
      )
        total++;
      if (i < 98 && !isRightEdge && squares[i + 1].classList.contains("mine"))
        total++;
      if (
        i < 90 &&
        !isLeftEdge &&
        squares[i - 1 + width].classList.contains("mine")
      )
        total++;
      if (
        i < 88 &&
        !isRightEdge &&
        squares[i + 1 + width].classList.contains("mine")
      )
        total++;
      if (i < 89 && squares[i + width].classList.contains("mine")) total++;
      squares[i].setAttribute("data", total);
    }
  }
};

createBoard();

// click for the square action
const click = (square) => {
  if (square.classList.contains("mine")) {
    console.warn("Game Over");
  } else {
    let total = square.getAttribute("data");
    if (total != 0) {
      square.classList.add("checked");
      square.innerHTML = total;
      return;
    }
  }
};
