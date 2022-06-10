let sayHello = (name) => console.log('Hi ' + name)

sayHello('Bright')

// Adjust the arrow function you created as part of task 1 to use three different syntaxes: With two arguments (incl. a phrase that replaces "Hi"), with no arguments (hard-coded values in function body) and with one returned value (instead of outputting text inside of the function directly).

let sayHello1 = (message, name) => {
  let greeting = `${message} ${name}`
  console.log(greeting)
}

sayHello1('Goodmorning', 'Bright')

let sayHello2 = () => {
  let greeting = 'How are you today, Bright'
  console.log(greeting)
}

let sayHello3 = (message, name) => {
  let greeting = `${message} ${name}`
  return greeting
}

// Add a default argument to the function you created: A fallback value for the phrase if no value is provided.
let sayHello4 = (name, message = 'Hello') => {
  let greeting = `${message} ${name}`
  return greeting
}

// Add a new function: "checkInput" which takes an unlimited amount of arguments (unlimited amount of strings) and executes a callback function if NO argument/ string is an empty string.
let checkInput = (cb, ...words) => {
  let hasEmptyString = false

  for (const word of words) {
    if (!word) {
      hasEmptyString = true
      break
    }
  }

  if (!hasEmptyString) {
    cb()
  }
}

checkInput(
  () => {
    console.log('All not empty')
  },
  'bright',
  'market',
  ' '
)
