const randomNumber = Math.random() // produces random number between 0 (including) and 1 (excluding)

// In the attached code assignment.js, you find a variable that holds a random number between 0 and 1. Write code that shows an alert (with any message) when that number is greater than 0.7.
if (randomNumber > 0.7) {
  alert('Hurray you got a number greater than 0.7')
}

// Create an array of numbers (any numbers of your choice) and loop through the array in two different ways - outputting the numbers inside of the loop.

numbers = [2, 4, 6, 8, 10, 12]

// using for loop
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}

// using for of
for (const number of numbers) {
  console.log(number)
}

// Adjust one of the loops from the last task such that it actually starts at the end (last element) of the array and loops to the first element.

// starting the loop from the last element
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i])
}

// Create another random number (in a separate constant) and show an alert in two different scenarios: Both are greater 0.7 OR at least one of the two is NOT greater than 0.2.
const newRandom = Math.random()

if (newRandom > 0.7 || newRandom < 0.2) {
  alert(`Hurray the number ${newRandom} meets requirement`)
}

let sum = 0
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 2; j++) {
    if (i >= 2) {
      continue
    }
    sum = sum + i + j
  }
}
console.log(sum) // ???
