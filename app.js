document.addEventListener("DOMContentLoaded", () => {
    const board = document.querySelector(".board");
    var win = document.getElementById("win")
    var draw = document.getElementById("draw")
    const cells = [];

    let currentPlayer = "X";
    let isGameOver = false;

    // Create cells
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cells.push(cell);
      board.appendChild(cell);
    }

    // Add click event listener to cells
    cells.forEach((cell, index) => {
      cell.addEventListener("click", () => {
        if (isGameOver || cell.textContent !== "") {
          return;
        }

        cell.textContent = currentPlayer;
        cell.classList.add(currentPlayer);

        if (checkWin(currentPlayer)) {
        //   alert(`${currentPlayer} wins!`);
        // win.innerHTML = "wins"
         win.innerHTML = currentPlayer + "  is WINNER"
          isGameOver = true;
        } else if (checkDraw()) {
        //   alert("It's a draw!");
        draw.innerHTML = "Oppss Its a Draw!"
          isGameOver = true;
        } else {
          currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
      });
    });

    // Check for a win
    function checkWin(player) {
      const winCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
      ];

      return winCombinations.some(combination => {
        return combination.every(index => cells[index].textContent === player);
      });
    }

    // Check for a draw
    function checkDraw() {
      return cells.every(cell => cell.textContent !== "");
    }
  });

  function reset(){
    location.reload()
  }