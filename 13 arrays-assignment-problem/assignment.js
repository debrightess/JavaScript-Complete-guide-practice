// Create an array of numbers (of your choice) and perform three array operations on it:
// filter for numbers greater than 5,
// map every number to an object which holds the number on some property (e.g. "num") and reduce the array to a single number (the multiplication of all numbers).

const numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

const filteredNumbers = numbers.filter((num) => {
  return num > 5
})

console.log(filteredNumbers)

let = multipliedNum = 1
const multipliedNumbers = numbers.map((num) => {
  multipliedNum *= num
  return multipliedNum
})

console.log(multipliedNum)

// Write a function ("findMax") which executes some logic that finds the largest number in a list of arguments.
// Pass the array from task 1 split up into multiple arguments to that function.

// let findMax = (numbers) => {
//   const max = Math.max(...numbers)
//   console.log(max)
// }

// findMax(numbers)

// Tweak the "findMax" function such that it finds both the minimum and maximum and returns those as an array. Then use destructuring when calling the function to store the two results in separate constants.

let findMax = (numbers) => {
  const max = Math.max(...numbers)
  const min = Math.min(...numbers)
  let result = []
  result.push(max)
  result.push(min)

  result[(max, min)] = result

  return result
}

let values = findMax(numbers)
console.log(values)

// Create a list (and possibly some surrounding logic) where you ensure that NO duplicate values can be added. Use whichever approach seems appropriate to you.

const cars = ['Saab', 'Volvo', 'BMW', 'Saab']

let uniqueCars = cars.filter((c, index) => {
  return cars.indexOf(c) === index
})

console.log(uniqueCars)
