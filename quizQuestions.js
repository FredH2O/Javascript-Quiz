const quizQuestions = [
  {
    question:
      "What is the correct syntax to output 'Hello World' in JavaScript?",
    choices: [
      "console.log('Hello World');",
      "echo('Hello World');",
      "print('Hello World');",
      "document.write('Hello World');",
    ],
    answer: 0,
  },
  {
    question: "How do you create a function in JavaScript?",
    choices: [
      "function myFunction() {}",
      "create function myFunction() {}",
      "function:myFunction() {}",
      "function = myFunction() {}",
    ],
    answer: 0,
  },
  {
    question: "What is the correct way to declare a variable in JavaScript?",
    choices: [
      "var myVariable;",
      "variable myVariable;",
      "myVariable = var;",
      "declare myVariable;",
    ],
    answer: 0,
  },
  {
    question: "How do you add a comment in JavaScript?",
    choices: [
      "// This is a comment",
      "# This is a comment",
      "<!-- This is a comment -->",
      "' This is a comment",
    ],
    answer: 0,
  },
  {
    question: "What does 'NaN' stand for in JavaScript?",
    choices: [
      "Not a Number",
      "Name and Number",
      "New and Number",
      "Not a Name",
    ],
    answer: 0,
  },
  {
    question: "Which of the following is not a JavaScript data type?",
    choices: ["String", "Boolean", "Number", "Character"],
    answer: 3,
  },
  {
    question: "What is the result of 2 + '2' in JavaScript?",
    choices: ["22", "4", "undefined", "NaN"],
    answer: 0,
  },
  {
    question: "How do you access the first element of an array in JavaScript?",
    choices: ["array[0]", "array.first()", "array.get(0)", "array[1]"],
    answer: 0,
  },
  {
    question: "What will the following code output: console.log(typeof NaN);?",
    choices: ["number", "undefined", "object", "NaN"],
    answer: 0,
  },
  {
    question: "Which keyword is used to define a constant in JavaScript?",
    choices: ["const", "let", "var", "define"],
    answer: 0,
  },
  {
    question: "How do you check if a variable 'x' is an array in JavaScript?",
    choices: [
      "Array.isArray(x)",
      "x.isArray()",
      "typeof x === 'array'",
      "x instanceof Array",
    ],
    answer: 0,
  },
  {
    question:
      "Which method is used to join all elements of an array into a string?",
    choices: ["join()", "concat()", "merge()", "combine()"],
    answer: 0,
  },
  {
    question: "What does the 'this' keyword refer to in a JavaScript function?",
    choices: [
      "The object that is currently executing the function",
      "The global object",
      "The function itself",
      "The parent object",
    ],
    answer: 0,
  },
  {
    question:
      "What will the following code output: console.log(0.1 + 0.2 === 0.3);?",
    choices: ["false", "true", "undefined", "NaN"],
    answer: 0,
  },
  {
    question: "What is the purpose of the 'break' statement in a loop?",
    choices: [
      "To exit the loop",
      "To skip the current iteration",
      "To pause the loop",
      "To continue to the next iteration",
    ],
    answer: 0,
  },
  {
    question: "How do you define an object in JavaScript?",
    choices: [
      "const myObject = {}",
      "object myObject = {}",
      "var myObject = []",
      "myObject = new Object()",
    ],
    answer: 0,
  },
  {
    question:
      "Which operator is used to check for both value and type equality in JavaScript?",
    choices: ["===", "==", "!=", "!=="],
    answer: 0,
  },
  {
    question: "What does JSON stand for?",
    choices: [
      "JavaScript Object Notation",
      "JavaScript Online Notation",
      "JavaScript Object Name",
      "JavaScript Output Notation",
    ],
    answer: 0,
  },
  {
    question: "How do you convert a string to an integer in JavaScript?",
    choices: ["parseInt()", "toInteger()", "Number()", "convertToInt()"],
    answer: 0,
  },
  {
    question: "Which function is used to parse a JSON string into an object?",
    choices: [
      "JSON.parse()",
      "JSON.stringify()",
      "parseJSON()",
      "stringifyJSON()",
    ],
    answer: 0,
  },
  {
    question: "How do you define a method inside an object?",
    choices: [
      "myObject.methodName = function() {};",
      "function myObject.methodName() {};",
      "myObject.methodName = () => {};",
      "object.methodName = function() {};",
    ],
    answer: 0,
  },
  {
    question: "What will the following code output: console.log(!!'');?",
    choices: ["false", "true", "undefined", "NaN"],
    answer: 0,
  },
  {
    question:
      "Which of the following methods adds an item to the end of an array?",
    choices: ["push()", "pop()", "shift()", "unshift()"],
    answer: 0,
  },
  {
    question: "How do you define a class in JavaScript?",
    choices: [
      "class MyClass {}",
      "define class MyClass {}",
      "class: MyClass {}",
      "MyClass = class() {}",
    ],
    answer: 0,
  },
  {
    question: "What is the result of '5' - 3 in JavaScript?",
    choices: ["2", "undefined", "NaN", "53"],
    answer: 0,
  },
  {
    question: "Which method is used to remove the last item from an array?",
    choices: ["pop()", "push()", "shift()", "unshift()"],
    answer: 0,
  },
  {
    question: "What will the following code output: console.log([] == false);?",
    choices: ["false", "true", "undefined", "NaN"],
    answer: 0,
  },
  {
    question: "What does 'isNaN()' function do in JavaScript?",
    choices: [
      "Checks if a value is NaN",
      "Converts a value to a number",
      "Checks if a value is null",
      "Converts a string to a number",
    ],
    answer: 0,
  },
  {
    question:
      "Which of the following is a valid way to define a JavaScript array?",
    choices: [
      "const myArray = []",
      "const myArray = ()",
      "const myArray = {}",
      "const myArray = new Array()",
    ],
    answer: 0,
  },
  {
    question:
      "What is the default value of a variable declared with 'let' if not initialized?",
    choices: ["undefined", "null", "0", "false"],
    answer: 0,
  },
  {
    question: "How do you prevent a form from submitting in JavaScript?",
    choices: [
      "event.preventDefault()",
      "form.stopSubmit()",
      "submit.prevent()",
      "event.stopPropagation()",
    ],
    answer: 0,
  },
  {
    question: "What is the purpose of 'async' and 'await' in JavaScript?",
    choices: [
      "To handle asynchronous operations",
      "To define synchronous functions",
      "To handle errors",
      "To declare variables",
    ],
    answer: 0,
  },
  {
    question: "How do you find the length of a string in JavaScript?",
    choices: [
      "string.length",
      "string.size",
      "length(string)",
      "string.getLength()",
    ],
    answer: 0,
  },
  {
    question: "What does the 'Array.prototype.map()' method do?",
    choices: [
      "Creates a new array with the results of calling a function on every element",
      "Filters out elements based on a condition",
      "Sorts the elements of the array",
      "Reverses the elements of the array",
    ],
    answer: 0,
  },
  {
    question: "What is the purpose of 'typeof' operator in JavaScript?",
    choices: [
      "To determine the type of a variable",
      "To convert a variable to a specific type",
      "To check if a variable is null",
      "To compare two variables",
    ],
    answer: 0,
  },
  {
    question: "How do you create a new date object in JavaScript?",
    choices: ["new Date()", "Date.new()", "create Date()", "new DateObject()"],
    answer: 0,
  },
  {
    question: "What will the following code output: console.log(1 + '1' - 1);?",
    choices: ["10", "11", "1", "NaN"],
    answer: 0,
  },
  {
    question: "Which method is used to sort the elements of an array in place?",
    choices: ["sort()", "order()", "arrange()", "shuffle()"],
    answer: 0,
  },
  {
    question: "What is the purpose of 'this' in an event handler function?",
    choices: [
      "Refers to the element that triggered the event",
      "Refers to the event object",
      "Refers to the global object",
      "Refers to the function itself",
    ],
    answer: 0,
  },
  {
    question:
      "Which keyword is used to define a block of code that can be executed repeatedly?",
    choices: ["loop", "repeat", "for", "function"],
    answer: 2,
  },
  {
    question: "How do you handle errors in JavaScript?",
    choices: [
      "try...catch",
      "error...catch",
      "handle...error",
      "catch...error",
    ],
    answer: 0,
  },
  {
    question:
      "What will the following code output: console.log(5 + '5' - '5');?",
    choices: ["50", "10", "5", "NaN"],
    answer: 0,
  },
  {
    question:
      "Which method is used to add an item to the beginning of an array?",
    choices: ["unshift()", "push()", "pop()", "shift()"],
    answer: 0,
  },
  {
    question: "What is the result of 10 % 3 in JavaScript?",
    choices: ["1", "3", "10", "0"],
    answer: 0,
  },
  {
    question: "How do you find the index of a specific element in an array?",
    choices: ["indexOf()", "findIndex()", "getIndex()", "search()"],
    answer: 0,
  },
  {
    question:
      "What will the following code output: console.log('Hello'.toUpperCase());?",
    choices: ["HELLO", "hello", "Hello", "undefined"],
    answer: 0,
  },
  {
    question: "Which method is used to remove the first item from an array?",
    choices: ["shift()", "pop()", "unshift()", "splice()"],
    answer: 0,
  },
  {
    question: "What does the 'concat()' method do in JavaScript?",
    choices: [
      "Joins two or more arrays",
      "Splits an array into smaller arrays",
      "Sorts the elements of an array",
      "Reverses the elements of an array",
    ],
    answer: 0,
  },
  {
    question: "Which statement is used to exit from a loop in JavaScript?",
    choices: ["break", "continue", "exit", "return"],
    answer: 0,
  },
  {
    question: "How do you add a new property to an object in JavaScript?",
    choices: [
      "object.property = value",
      "object.addProperty('property', value)",
      "object.set('property', value)",
      "object.property.add(value)",
    ],
    answer: 0,
  },
  {
    question: "What will the following code output: console.log(3 * '3');?",
    choices: ["9", "33", "undefined", "NaN"],
    answer: 0,
  },
  {
    question:
      "How do you make a JavaScript function execute after a certain delay?",
    choices: ["setTimeout()", "delay()", "setDelay()", "pause()"],
    answer: 0,
  },
  {
    question: "Which method is used to extract a portion of a string?",
    choices: ["slice()", "split()", "splice()", "substr()"],
    answer: 0,
  },
  {
    question: "What is the result of the expression 'true + 1' in JavaScript?",
    choices: ["2", "true1", "undefined", "NaN"],
    answer: 0,
  },
  {
    question: "What does the 'filter()' method do in JavaScript?",
    choices: [
      "Creates a new array with all elements that pass a test",
      "Sorts the elements of an array",
      "Combines all elements into a single string",
      "Removes duplicates from an array",
    ],
    answer: 0,
  },
  {
    question: "How do you access the last element of an array in JavaScript?",
    choices: [
      "array[array.length - 1]",
      "array[array.length]",
      "array.last()",
      "array.getLast()",
    ],
    answer: 0,
  },
  {
    question: "What will the following code output: console.log('10' - 1);?",
    choices: ["9", "10", "NaN", "undefined"],
    answer: 0,
  },
  {
    question:
      "Which property of the 'window' object contains the URL of the current page?",
    choices: ["location.href", "document.url", "window.url", "location.href"],
    answer: 0,
  },
  {
    question:
      "What is the default value of a variable declared with 'var' but not initialized?",
    choices: ["undefined", "null", "0", "false"],
    answer: 0,
  },
  {
    question:
      "Which JavaScript function can be used to execute code repeatedly?",
    choices: ["setInterval()", "setTimeout()", "repeat()", "loop()"],
    answer: 0,
  },
  {
    question: "What is the purpose of the 'arguments' object in a function?",
    choices: [
      "Contains all arguments passed to the function",
      "Stores the function name",
      "Contains the function's local variables",
      "Lists all functions within the function",
    ],
    answer: 0,
  },
  {
    question: "Which method is used to remove a specific item from an array?",
    choices: ["splice()", "pop()", "shift()", "remove()"],
    answer: 0,
  },
  {
    question: "How do you convert a number to a string in JavaScript?",
    choices: [
      "number.toString()",
      "String(number)",
      "number.toStr()",
      "convertToString(number)",
    ],
    answer: 0,
  },
  {
    question: "What does the 'map()' method return?",
    choices: [
      "A new array with modified elements",
      "A new array with the same elements",
      "A single modified value",
      "The original array",
    ],
    answer: 0,
  },
  {
    question:
      "Which method is used to remove white spaces from both ends of a string?",
    choices: ["trim()", "strip()", "cut()", "clean()"],
    answer: 0,
  },
  {
    question: "What does the 'reduce()' method do in JavaScript?",
    choices: [
      "Executes a reducer function on each element of the array, resulting in a single value",
      "Filters the elements of an array based on a condition",
      "Maps each element of an array to a new value",
      "Finds the maximum value in an array",
    ],
    answer: 0,
  },
  {
    question: "What will the following code output: console.log('5' + 5 - 5);?",
    choices: ["50", "10", "5", "NaN"],
    answer: 0,
  },
  {
    question: "How do you handle asynchronous code in JavaScript?",
    choices: [
      "Using promises or async/await",
      "Using setInterval()",
      "Using synchronous code only",
      "Using callbacks exclusively",
    ],
    answer: 0,
  },
  {
    question: "Which operator is used to concatenate strings in JavaScript?",
    choices: ["+", "&", "concat()", "++"],
    answer: 0,
  },
  {
    question:
      "How do you create an instance of an object using a constructor function?",
    choices: [
      "new ConstructorFunction()",
      "ConstructorFunction()",
      "Object.create(ConstructorFunction)",
      "ConstructorFunction.new()",
    ],
    answer: 0,
  },
  {
    question:
      "Which method is used to find the index of a specific value in an array?",
    choices: ["indexOf()", "find()", "search()", "positionOf()"],
    answer: 0,
  },
  {
    question: "What does the 'split()' method do in JavaScript?",
    choices: [
      "Splits a string into an array of substrings",
      "Joins an array into a string",
      "Replaces a substring with another string",
      "Removes a substring from a string",
    ],
    answer: 0,
  },
  {
    question: "What is the difference between 'let' and 'var' in JavaScript?",
    choices: [
      "'let' has block scope, 'var' has function scope",
      "'let' is faster than 'var'",
      "'let' is older than 'var'",
      "'var' is used for constants, 'let' is for variables",
    ],
    answer: 0,
  },
  {
    question:
      "Which method can be used to add a property to an existing object?",
    choices: [
      "object.property = value",
      "object.addProperty(property, value)",
      "object.set(property, value)",
      "object.createProperty(property, value)",
    ],
    answer: 0,
  },
  {
    question: "What is the purpose of the `with` statement in JavaScript?",
    choices: [
      "To extend the scope chain for a block of code",
      "To declare a new variable",
      "To create a new object",
      "To iterate over an array",
    ],
    answer: 0,
  },
];

// console.log(quizQuestions.length);

export default quizQuestions;
