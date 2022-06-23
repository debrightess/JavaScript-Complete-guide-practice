// creating sets
const ids = new Set([2, 5, 3])
console.log(ids)

for (const entry of ids.entries()) {
  console.log(entry)
}

const words = new Set(['Good', 'Bad', 'Net', 'Seek'])

words.add('Finish')

if (words.has('Bad')) {
  words.delete('Bad')
}

console.log(words)

// Working with maps
const person1 = { name: 'Bright' }
const person2 = { name: 'Bob' }

const personData = new Map([[person1, [{ date: 'yesterday', price: 40 }]]])

// getting data from a map
console.log(personData.get(person1))
// add data to a map
personData.set(person2, [{ date: 'last week', price: 35 }])

console.log(personData)

// output all the informations in a map
// 1. loop through all the entries
for (const entry of personData.entries()) {
  console.log(entry)
}

// 2. array destructuring
for (const [key, value] of personData.entries()) {
  console.log(key, value)
}
