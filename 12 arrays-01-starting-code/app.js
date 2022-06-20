// const listItems = document.querySelectorAll('li')
// // console.log(listItems)

// const arrayListItems = Array.from(listItems)
// // console.log(arrayListItems);

// const hobbies = ['Cooking', 'Sports']
// const personalData = [30, 'Max', { moreDetail: [] }]

// // Example on Multi-dimensional arrays
// // Arrays are really flexible regarding the value to store in them.

// const analyticsData = [
//   [1, 1.6],
//   [-5.4, 2.1],
// ]

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint)
//   }
// }

// // Arrays are index based
// console.log(personalData[2])

// How we can add data to arrays

const hobbies = ['Sports', 'Cooking']
// push adds elements to the end of an array
hobbies.push('Reading')
// unshift adds elements at the begining of the array
hobbies.unshift('Coding')
console.log(hobbies)

// Removing last Element from the Array
// pop() stores the element removed from the array
hobbies.pop()
console.log(hobbies)

// Remove the elements at the begining of the array with shift
hobbies.shift()
console.log(hobbies)

// Manipulate elements in different places in an array
hobbies[2] = 'Sleeping'
console.log(hobbies)

// The splice method inserts element between elements
// Splice method is only available on real arrays

hobbies.splice(1, 0, 'Good Food')
console.log(hobbies)

// You can use splice(0) to clear an array
// hobbies.splice(0)
// console.log(hobbies)

// spice returns the removed elements
// negative indexes are allowed in the spice method.
const removedElements = hobbies.splice(-2, 1)
console.log(removedElements)
