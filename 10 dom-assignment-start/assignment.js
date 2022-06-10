// #1 Select this task (in two different ways at least!) and change the background-color to black, text-color to white.

// using getElementById
let task1 = document.getElementById('task-1')
task1.style.backgroundColor = 'black'

// using document.querySelector
let taskOne = document.querySelector('li')
taskOne.style.color = 'white'

// #2 Change the document title (in <head></head>) to "Assignment - Solved!". Use two different ways for getting access to the <title> element: Via querySelector on document and via querySelector on the certain property you find in document.

let header = (document.querySelector('title').textContent =
  'Assignment Solved!')

// # 3 Select the <h1> element on this page and change its text to "Assignment - Solved!".

let heading1 = (document.querySelector('h1').textContent = 'Assingment Solved!')
