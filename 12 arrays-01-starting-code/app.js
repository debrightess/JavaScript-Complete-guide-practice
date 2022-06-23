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

// const hobbies = ['Sports', 'Cooking']
// // push adds elements to the end of an array
// hobbies.push('Reading')
// // unshift adds elements at the begining of the array
// hobbies.unshift('Coding')
// console.log(hobbies)

// // Removing last Element from the Array
// // pop() stores the element removed from the array
// hobbies.pop()
// console.log(hobbies)

// // Remove the elements at the begining of the array with shift
// hobbies.shift()
// console.log(hobbies)

// // Manipulate elements in different places in an array
// hobbies[2] = 'Sleeping'
// console.log(hobbies)

// // The splice method inserts element between elements
// // Splice method is only available on real arrays

// hobbies.splice(1, 0, 'Good Food')
// console.log(hobbies)

// // You can use splice(0) to clear an array
// // hobbies.splice(0)
// // console.log(hobbies)

// // spice returns the removed elements
// // negative indexes are allowed in the spice method.
// const removedElements = hobbies.splice(-2, 1)
// console.log(removedElements)

// const testResults = [1, 4.6, 1.4, 20.33, -3, 10]
// console.log(testResults.slice())

// using slice to copy an array
// const storedResults = testResults.slice()

// Selecting a part of an array with splice
// console.log(testResults.splice(1, 4))

// Adding elements at the end of an array using concat()
// const storedResults = testResults.concat([1, 4])
// console.log(storedResults)

// Retrieving index with indexOf() & lastIndexOf()
// console.log(testResults.indexOf(20.33))
// last indexOf() starts from the right
// indexOf does not work on objects

// Using find() and findIndex()
// const personalData = [{ name: 'Max' }, { name: 'Bob' }]

// const bob = personalData.find((person, id, persons) => {
//   return person.name === 'Bob'
// })

// console.log(bob)

// const bobIndex = personalData.findIndex((person, id, persons) => {
//   return person.name === 'Bob'
// })

// console.log(bobIndex)

// // The forEach() Method
// const prices = [28.19, 2.1, 99, 23]
// const tax = 0.23
// const taxAdjustedPrices = []

// for (const price of prices) {
//   taxAdjustedPrices.push(price * (1 + tax))
// }

// prices.forEach((price, id, prices) => {
//   const priceObj = { index: id, taxAdjustedPrices: price * (1 + tax) }
//   taxAdjustedPrices.push(priceObj)
// })

// console.log(taxAdjustedPrices)

// // Transforming Data with map()

// const prices = [10.5, 28.19, 2.1, 99, 23]
// const tax = 0.23

// const taxAdjustedPrices = prices.map((price, id, prices) => {
//   const priceObj = { index: id, taxAdjPrice: price * (1 + tax) }
//   return priceObj
// })

// console.log(prices, taxAdjustedPrices)

// // sort()ing and reverse()ing
// const sortedPrices = prices.sort((a, b) => {
//   if (a > b) {
//     return 1
//   } else if (a === b) {
//     return 0
//   } else {
//     return -1
//   }
// })
// console.log(sortedPrices)
// console.log(sortedPrices.reverse())
// // Changing your sort logic will automatically do the reversal and save a line of code.

// // Filtering arrays with filter()
// const filteredArray = prices.filter((price) => {
//   return price > 12
// })

// console.log(filteredArray)

// The Reduce Method

// const prices = [10.5, 28.19, 2.1, 99, 23]
// // let sum = 0

// // prices.forEach((price) => {
// //   sum += price
// // })
// // console.log(sum)

// const sum = prices.reduce((preValue, curValue) => {
//   return preValue + curValue
// }, 0)

// console.log(sum)

// // split() and join()

// const dict = 'oxford,advanced,learners,dictionary'
// const transformedDict = dict.split(',')
// console.log(transformedDict)

// const nameFragments = ['Bright', 'Tenalo']
// const name = nameFragments.join(' ')
// console.log(name)

// // Spread operator (...)
// const copiedNameFragments = [...nameFragments]
// nameFragments.push('Tombari')
// console.log(nameFragments, copiedNameFragments)

// // Array Destructuring
// const nameFragments = ['Bright', 'Tenalo']

// const [firstName, lastName] = nameFragments

// console.log(firstName, lastName)
