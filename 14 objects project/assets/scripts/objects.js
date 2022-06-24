let person = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Chess'],
  greet: function () {
    console.log('Hello dear')
  },
}

// Note: if you access a property of an object which does not exist, you get undefined.

// adding a property
person.isAdmin = true

// deleting a property
delete person.greet

console.log(person)

// If you have objects with only numbers as keys, the numbers will be sorted.
