// Game board
let board = [
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', '']
];

// Player is X, computer is O
let currentPlayer = 'X';
let win = false;

// Function to make player move
function playerMove(row, col) {
  // Check if move is valid
  if (board[row][col] !== '' || win) {
    return;
  }
  
  // Update game board and display move
  board[row][col] = currentPlayer;
  document.getElementById(`cell${row}${col}`).innerHTML = currentPlayer;
  
  // Check if player has won
  if (checkWin(currentPlayer)) {
    win = true;
    document.getElementById("result").innerHTML = "You win!";
    return;
  }
  
  // Check if game is a tie
  if (checkTie()) {
    document.getElementById("result").innerHTML = "It's a tie!";
    return;
  }
  
  // Switch to computer's turn
  currentPlayer = 'O';
  
  // Call computer's move after a delay
  setTimeout(computerMove, 500);
}

// Function to make computer move
function computerMove() {

  let randomCell = getComputerMove();
  
  // Update game board and display move
  board[randomCell[0]][randomCell[1]] = currentPlayer;
  document.getElementById(`cell${randomCell[0]}${randomCell[1]}`).innerHTML = currentPlayer;
  
  // Check if computer has won
  if (checkWin(currentPlayer)) {
    win = true;
    document.getElementById("result").innerHTML = "Computer wins!";
    return;
  }
  
  // Check if game is a tie
  if (checkTie()) {
    document.getElementById("result").innerHTML = "It's a tie!";
    return;
  }
  
  // Switch to player's turn
  currentPlayer = 'X';
}

function getComputerMove() {
    // choose  empty cells
  let emptyCells = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      if (board[row][col] === '') {
        emptyCells.push([row, col]);
      }
    }
  }

  //check for computer win chance
  for(let i=0; i < emptyCells.length; i++){
     let cell = emptyCells[i];
      board[cell[0]][cell[1]] = 'O';
      if(checkWin('O')){
        board[cell[0]][cell[1]] = '';
        return cell;
      }
      else
        board[cell[0]][cell[1]] = '';

  }

    //check for player win chance
  for(let i=0; i < emptyCells.length; i++){
     let cell = emptyCells[i];
      board[cell[0]][cell[1]] = 'X';
      if(checkWin('X')){
        board[cell[0]][cell[1]] = '';
        return cell;
      }
      else
        board[cell[0]][cell[1]] = '';

  }

  //return random if none of the above
  return emptyCells[Math.floor(Math.random() * emptyCells.length)];

}

// Function to check if a player has won
function checkWin(player) {
  // Check for horizontal win
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 2; col++) {
      if (board[row][col] === player && board[row][col+1] === player && board[row][col+2] === player) {
        return true;
      }
    }
  }

  // Check for vertical win
  for (let row = 0; row < 2; row++) {
    for (let col = 0; col < 4; col++) {
      if (board[row][col] === player && board[row+1][col] === player && board[row+2][col] === player) {
        return true;
      }
    }
  }

  // Check for diagonal win (top left to bottom right)
  for (let row = 0; row < 2; row++) {
    for (let col = 0; col < 2; col++) {
      if (board[row][col] === player && board[row+1][col+1] === player && board[row+2][col+2] === player) {
        return true;
      }
    }
  }

  // Check for diagonal win (bottom left to top right)
  for (let row = 2; row < 4; row++) {
    for (let col = 0; col < 2; col++) {
      if (board[row][col] === player && board[row-1][col+1] === player && board[row-2][col+2] === player) {
        return true;
      }
    }
  }

  return false;
}


// Function to check if game is a tie
function checkTie() {
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      if (board[row][col] === '') {
        return false;
      }
    }
  }
  return true;
}

// Function to reset the game
function resetGame() {
  // Clear game board
  board = [
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', '']
  ];
  
  // Reset display
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      document.getElementById(`cell${row}${col}`).innerHTML = '';
    }
  }
  document.getElementById("result").innerHTML = '';
  
  // Reset player turn
  currentPlayer = 'X';
}


