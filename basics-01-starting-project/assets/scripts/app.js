const defaultResult = 0

let currentResult = defaultResult

logEntries = []

function userEntered() {
  return parseInt(userInput.value)
}

function createAndWriteOutput(operator, initialValue, userInput) {
  const calcDescription = `${initialValue} ${operator} ${userInput}`
  outputResult(currentResult, calcDescription)
}

function createLog(operator, firstNumber, secondNumber, result) {
  logEntry = {
    operand: operator,
    number1: firstNumber,
    number2: secondNumber,
    result: result,
  }
  logEntries.push(logEntry)
  console.log(logEntries)
}

function calculateResult(calculationType) {
  const enteredNumber = userEntered()
  let initialValue = currentResult
  let mathOperator
  if (calculationType === 'ADD') {
    currentResult += enteredNumber
    mathOperator = '+'
  } else if (calculationType === 'SUBTRACT') {
    currentResult -= enteredNumber
    mathOperator = '-'
  } else if (calculationType === 'MULTIPLY') {
    currentResult *= enteredNumber
    mathOperator = '*'
  } else if (calculationType === 'DIVIDE') {
    currentResult /= enteredNumber
    mathOperator = '/'
  }
  createAndWriteOutput(mathOperator, initialValue, enteredNumber)
  createLog(mathOperator, initialValue, enteredNumber, currentResult)
}

function add() {
  calculateResult('ADD')
}

function subtract() {
  calculateResult('SUBTRACT')
}

function multiply() {
  calculateResult('MULTIPLY')
}

function divide() {
  calculateResult('DIVIDE')
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)
