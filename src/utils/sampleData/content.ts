export const cscSampleContent = [
  {
    week: 1,
    title: "Introduction to Programming",
    content: [
      "Programming is the process of designing and writing computer programs. It is a set of instructions that helps the developer to perform certain tasks that return the desired output for the valid inputs. Programs consist of a series of instructions to tell a computer exactly what to do and how to do it.",
      "Computer programming is the process of designing and developing various sets of computer programs to accomplish a specific computing outcome. As a skill set, it includes a wide variety of different tasks and techniques. Programming is the mental process of thinking up instructions to give to a machine (like a computer). Coding is the process of transforming those ideas into a written language that a computer can understand.",
      "Programming follows a syntax or a set of rules that define particular layouts of letters and symbols. Proper syntax ensures the computer reads and interprets code accurately. Algorithms can be represented as pseudocode or a flowchart, and programming is the translation of these into a computer program.",
      "Programming languages are how humans communicate with computers. They include numeric, string and boolean types. For example, if using number data type, the program will know that arithmetic can be performed on it, but it can’t be capitalized.",
    ],
    completed: true,
    resources: [
      {
        title: "Introduction to Programming",
        link: "https://www.khanacademy.org/computing/computer-programming/programming",
      },
      {
        title: "Introduction to JavaScript",
        link: "https://www.geeksforgeeks.org/introduction-to-javascript/",
      },
    ],
  },
  {
    week: 2,
    title: "Variables and Data Types",
    content: [
      "Variables are containers for storing data values. In JavaScript, there are 3 ways to declare a variable:",
      "var x = 5;",
      "let x = 5;",
      "const x = 5;",
      "The let and const keywords were introduced in ES6. The var keyword should not be used, because it can have unexpected results. The let keyword can be updated, but not re-declared. The const keyword can neither be updated nor re-declared. Variables declared with the const keyword are read-only. They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned.",
      "JavaScript has 7 different data types:",
      "Number",
      "String",
      "Boolean",
      "Object",
      "Array",
      "Function",
      "Undefined",
      "The typeof operator is used to find the type of a JavaScript variable. It returns the data type as a string.",
    ],
    completed: true,
    resources: [
      {
        title: "Variables",
        link: "https://www.w3schools.com/js/js_variables.asp",
      },
      {
        title: "Data Types",
        link: "https://www.w3schools.com/js/js_datatypes.asp",
      },
    ],
  },
  {
    week: 3,
    title: "Conditionals and Loops",
    content: [
      "Conditionals are used to perform different actions based on different conditions. If the condition is true, a block of code is executed. If the condition is false, another block of code can be executed. There are 3 types of conditionals in JavaScript:",
      "if statement",
      "if...else statement",
      "if...else if...else statement",
      "Loops are used to repeat a block of code a number of times. There are 3 types of loops in JavaScript:",
      "for loop",
      "while loop",
      "do...while loop",
    ],
    completed: false,
    resources: [
      {
        title: "Conditionals",
        link: "https://www.w3schools.com/js/js_if_else.asp",
      },
      {
        title: "Loops",
        link: "https://www.w3schools.com/js/js_loop_for.asp",
      },
    ],
  },
  {
    week: 4,
    title: "Functions",
    content: [
      "A function is a block of code designed to perform a particular task. A JavaScript function is executed when something invokes it (calls it).",
      "There are 3 types of functions in JavaScript:",
      "Function declarations",
      "Function expressions",
      "Arrow functions",
      "A function declaration is a function that is bound to an identifier or name. It is defined using the function keyword, followed by the name of the function, followed by a set of parentheses ().",
      "A function expression is a function that is assigned to a variable. It is defined using the function keyword, followed by a set of parentheses (), followed by the curly braces {} that contain the function body.",
      "An arrow function expression is a compact alternative to a traditional function expression, but is limited and can’t be used in all situations. It is defined using the arrow (=>) notation.",
    ],
    completed: false,
    resources: [
      {
        title: "Functions",
        link: "https://www.w3schools.com/js/js_functions.asp",
      },
      {
        title: "Arrow Functions",
        link: "https://www.w3schools.com/js/js_arrow_function.asp",
      },
      {
        title: "Function Expressions",
        link: "https://www.w3schools.com/js/js_function_expressions.asp",
      },
    ],
  },
  {
    week: 5,
    title: "Arrays",
    content: [
      "An array is a special variable, which can hold more than one value at a time. If you have a list of items (a list of car names, for example), storing the cars in single variables.",
      "Arrays are used to store multiple values in a single variable. This is compared to a variable that can only store one value at a time. Arrays are used to make lists and collections of data.",
      "Arrays are created using square brackets [].",
      "Each item in an array is associated with a number called an index. This index starts at 0, and can be used to access specific items in the array.",
    ],
    completed: false,
    resources: [
      {
        title: "Arrays",
        link: "https://www.w3schools.com/js/js_arrays.asp",
      },
      {
        title: "Array Methods",
        link: "https://www.w3schools.com/js/js_array_methods.asp",
      },
      {
        title: "Array Iteration",
        link: "https://www.w3schools.com/js/js_array_iteration.asp",
      },
      {
        title: "Array Sort",
        link: "https://www.w3schools.com/js/js_array_sort.asp",
      },
      {
        title: "Array Filter",
        link: "https://www.w3schools.com/js/js_array_filter.asp",
      },
    ],
  },
  {
    week: 6,
    title: "Objects",
    content: [
      "Objects are variables too. But objects can contain many values. Objects are written with curly braces {}. Each property has a name and a value, separated by a colon. Property names are strings, written with double or single quotes.",
      "Objects are used to store many values in a single variable. Objects are used to make lists and collections of data.",
      "Objects are created using curly brackets {}.",
      "Each item in an object is associated with a key called a property. This property starts at 0, and can be used to access specific items in the object.",
    ],
    completed: false,
    resources: [
      {
        title: "Objects",
        link: "https://www.w3schools.com/js/js_objects.asp",
      },
      {
        title: "Object Methods",
        link: "https://www.w3schools.com/js/js_object_methods.asp",
      },
      {
        title: "Object Iteration",
        link: "https://www.w3schools.com/js/js_object_iteration.asp",
      },
    ],
  },
  {
    week: 7,
    title: "Recursion",
    content: [
      "Recursion is a process (a function in our case) that calls itself. The process repeats until a condition is met, in which case it doesn’t call itself again. This terminating condition is known as the base case. It is necessary to have a base case, otherwise the function will call itself infinitely.",
      "Recursion is used to solve problems that can be broken down into smaller instances of the same problem. It can also be used to traverse through data structures such as trees and graphs.",
      "It is important to note that recursion is not always the best solution to a problem. It can be very inefficient and can cause a stack overflow if not implemented properly.",
      "However, recursion is a very powerful tool that can be used to solve many problems. It is important to understand how it works and when to use it.",
      "Here are some examples of problems that can be solved using recursion:",
      "Factorial",
      "Fibonacci Sequence",
      "Tower of Hanoi",
      "Binary Search",
      "Merge Sort",
    ],
    completed: false,
    resources: [
      {
        title: "Recursion",
        link: "https://www.w3schools.com/js/js_function_recursion.asp",
      },
      {
        title: "Examples of Recursion",
        link: "https://www.freecodecamp.org/news/recursion-in-javascript-160803afad0a/",
      },
    ],
  },
  {
    week: 8,
    title: "Midterm",
    content: ["In this week, we will be having our midterm."],
    completed: false,
  },
  {
    week: 9,
    title: "Introduction to Data Structures",
    content: [
      "A data structure is a particular way of organizing data in a computer so that it can be used effectively. Data structures are used to store collections of data, and they define the relationship between the data, and the functions or operations that can be applied to the data.",
      "There are many different types of data structures, and they are used to solve many different problems. Some of the most common data structures are arrays, stacks, queues, linked lists, trees, and graphs.",
      "In this week, we will be learning about the most common data structures and how they are used.",
      "Here are some example of data structures and the problems they are used to solve:",
      "Arrays - Used to store a collection of data. They are used to implement other data structures, such as lists, stacks, and queues.",
      "Linked Lists - Used to store a collection of data. They can be singly linked lists, doubly linked lists, or circular linked lists.",
      "Stacks - Used to store a collection of data. Follows the Last In First Out (LIFO) principle.",
      "Queues - Used to store a collection of data. Follows the First In First Out (FIFO) principle.",
      "Trees - Used to store a collection of data. Works by having nodes that point to other nodes.",
    ],
    completed: false,
    resources: [
      {
        title: "Data Structures",
        link: "https://www.w3schools.com/js/js_data_structures.asp",
      },
      {
        title: "Data Structures and Algorithms",
        link: "https://www.freecodecamp.org/news/data-structures-and-algorithms-in-javascript/",
      },
    ],
  },
  {
    week: 10,
    title: "Linked Lists",
    content: ["In this week, we will be learning about linked lists."],
    completed: false,
  },
  {
    week: 11,
    title: "Stacks and Queues",
    content: ["In this week, we will be learning about stacks and queues."],
    completed: false,
  },
  {
    week: 12,
    title: "Trees",
    content: ["In this week, we will be learning about trees."],
    completed: false,
  },
];
