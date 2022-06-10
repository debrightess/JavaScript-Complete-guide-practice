const task3Element = document
  .getElementById('task-3')
  .addEventListener('click', message)

function message() {
  alert('Today is a great day')
}

function person(name) {
  alert(`Hello, ${name} how are you.`)
}

message()

person('Bright')

function messages(text1, text2, text3) {
  alert(text1 + text2 + text3)
}

messages('Hello', 'Kelvin', 'Briggs')
