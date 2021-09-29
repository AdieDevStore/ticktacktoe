// other JS for UI below 


// MAIN GAME CODE BELOW 
// COMPLETE AND TESTED - YES 

let gameGrid = ['', '', '', '' , '', '', '', '', ''];

let gameOn = false
let playerOneMarker = 'X';
let playerTwoMarker = 'O';
let winner = [false, ''];
let lastPlay = 'O';

function start(){
  gameOn = true
  console.log(gameOn)
}

function reset() {
  location.reload()
}

// uses event delegation to detect click events - event listener functions as main game loop. 
// start game func changes gameOn from from false to true, which stops the negation of click events.
const gameArea = document.getElementsByClassName('game-container');

for (let i=0; i < gameArea.length; i++) {
  gameArea[i].addEventListener('click', (e)=> {
    if(e.target.className != 'game-container'){
      if(gameOn == true && e.target.innerHTML === '?') {
        e.target.innerHTML = renderMarker()
        gameGrid[e.target.id] = e.target.innerHTML
      }
    }
      checkWinCondition()
  }, false)
};

// change player betweeen player markers.  
function renderMarker(){
  if(lastPlay === playerTwoMarker){
      lastPlay = playerOneMarker
    return playerOneMarker
  } else {
      lastPlay = playerTwoMarker
    return playerTwoMarker
  }
};

// validate combination, and set winner to marker
function validateWin(a, b , c) {
  if(gameGrid[a, b, c] !== ''){
    if( gameGrid[a] == gameGrid[b] && gameGrid[b] == gameGrid[c]) {
      gameOn = false
      winner[1] = gameGrid[a]
    }
  } else {
      return false
  }
};

// checks for win or if
function checkWinCondition() {
    // check all combinations for rows/columns

    if (checkRows()){
      winner[0] = true
      return true
    }

    if (checkColumns()) {
      winner[0] = true
      return true
    }
    // check diagonals
    if(validateWin(2, 4, 6)) {
      winner[0] = true
      return true
    }

    if(validateWin(0, 4, 8)) {
      winner[0] = true
      return true
    }
  return false
};

function checkRows(){
  for(i = 0; i< gameGrid.length; i +=3){
    if(gameGrid[i] != ''){
      if(validateWin(i, i + 1, i+2)) {
        return  
      }
    }
  }
};

function checkColumns(){
  for(i = 0; i < 3; i++) {
    if(gameGrid[i] != '') {
      if(validateWin(i, i+ 3, i+ 6)){
        return 
      }
    }
  }
};
