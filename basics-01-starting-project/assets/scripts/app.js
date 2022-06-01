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

function add() {
  const enteredNumber = userEntered()
  let initialValue = currentResult
  currentResult += enteredNumber
  createAndWriteOutput('+', initialValue, enteredNumber)
  createLog('Add', initialValue, enteredNumber, currentResult)
}

function subtract() {
  const enteredNumber = userEntered()
  let initialValue = currentResult
  currentResult -= enteredNumber
  createAndWriteOutput('-', initialValue, enteredNumber)
  createLog('Subtract', initialValue, enteredNumber, currentResult)
}

function multiply() {
  const enteredNumber = userEntered()
  let initialValue = currentResult
  currentResult *= enteredNumber
  createAndWriteOutput('*', initialValue, enteredNumber)
  createLog('multiply', initialValue, enteredNumber, currentResult)
}

function divide() {
  const enteredNumber = userEntered()
  let initialValue = currentResult
  currentResult /= enteredNumber
  createAndWriteOutput('/', initialValue, enteredNumber)
  createLog('Divide', initialValue, enteredNumber, currentResult)
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)
