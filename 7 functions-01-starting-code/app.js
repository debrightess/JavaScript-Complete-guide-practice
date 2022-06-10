const startGameBtn = document.getElementById('start-game-btn')

// Selections
const ROCK = 'ROCK'
const PAPER = 'PAPER'
const SCISSORS = 'SCISSORS'
const DEFAULT_SELECTION = ROCK
// Game Outcomes
const DRAW = 'DRAW'
const COMPUTER_WINS = 'COMPUTER WINS'
const PLAYER_WINS = 'PLAYER WINS'

let gameIsRunning = false

function getComputerSelection() {
  randNum = Math.round(Math.random() * 3)
  if (randNum === 1) {
    return ROCK
  } else if (randNum === 2) {
    return PAPER
  } else {
    return SCISSORS
  }
}

let getuserSelection = () => {
  selection = prompt(
    `Select ${ROCK}, ${PAPER}, or ${SCISSORS}`,
    ''
  ).toUpperCase()

  if (selection !== ROCK && (selection !== PAPER) & (selection !== SCISSORS)) {
    alert(`Invalid selection, we selected ${DEFAULT_SELECTION} for you.`)
    return DEFAULT_SELECTION
  }
  return selection
}

function getResult(cSelection, pSelection) {
  if (cSelection === pSelection) {
    return DRAW
  } else if (
    (cSelection === ROCK && pSelection === PAPER) ||
    (cSelection === PAPER && pSelection === SCISSORS) ||
    (cSelection === SCISSORS && pSelection === ROCK)
  ) {
    return PLAYER_WINS
  } else {
    return COMPUTER_WINS
  }
}

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return
  }
  gameIsRunning = true
  console.log('Game has started...')
  const computerSelection = getComputerSelection()
  const userSelection = getuserSelection()
  let result
  if (userSelection) {
    result = getResult(computerSelection, userSelection)
  } else {
    result = getResult(computerSelection)
  }

  let message = `You selected ${userSelection} and computer selected ${computerSelection}. `
  if (result === DRAW) {
    message = message + 'Its a draw'
  } else if (result === PLAYER_WINS) {
    message = message + 'You Won'
  } else {
    message = message + 'Computer Won'
  }
  alert(message)
  gameIsRunning = false
})
