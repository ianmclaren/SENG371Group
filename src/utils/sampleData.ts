import { Course, Discussion } from "./types";

export const sampleCourses: Course[] = [
  {
    id: "1",
    name: "CSC 110",
    description: "Introduction to Computer Science",
    section: "A02",
    term: "Spring 2023",
    year: 2023,
    professor: "John Doe",
    completed: false,
    color: "red.400",
    content: [
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
          "In this week, we will be learning about variables and data types.",
        ],
        completed: true,
      },
      {
        week: 3,
        title: "Conditionals and Loops",
        content: [
          "In this week, we will be learning about conditionals and loops.",
        ],
        completed: false,
      },
      {
        week: 4,
        title: "Functions",
        content: ["In this week, we will be learning about functions."],
        completed: false,
      },
      {
        week: 5,
        title: "Arrays",
        content: ["In this week, we will be learning about arrays."],
        completed: false,
      },
      {
        week: 6,
        title: "Objects",
        content: ["In this week, we will be learning about objects."],
        completed: false,
      },
      {
        week: 7,
        title: "Recursion",
        content: ["In this week, we will be learning about recursion."],
        completed: false,
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
        content: ["In this week, we will be learning about data structures."],
        completed: false,
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
    ],
  },
  {
    id: "2",
    name: "CHEM 150",
    description: "Introduction to Chemistry",
    section: "A01",
    term: "Spring 2023",
    year: 2023,
    professor: "Jane Doe",
    completed: false,
    notifications: ["Midterm is coming up!"],
    color: "blue.400",
    content: [
      {
        week: 1,
        title: "Introduction to Chemistry",
        content: [
          "In this week, we will be learning about the basics of chemistry.",
        ],
        completed: true,
      },
      {
        week: 2,
        title: "Atomic Structure",
        content: [
          "In this week, we will be learning about the structure of atoms.",
        ],
        completed: true,
      },
    ],
  },
  {
    id: "3",
    name: "MATH 150",
    description: "Introduction to Mathematics",
    section: "A01",
    term: "Spring 2023",
    year: 2023,
    professor: "Mark Smith",
    completed: false,
    color: "green.400",
  },
  {
    id: "4",
    name: "BIO 150",
    description: "Introduction to Biology",
    section: "A01",
    term: "Spring 2023",
    year: 2023,
    professor: "Emma Jones",
    completed: false,
    notifications: [
      "Assignment 1 is due in 2 days",
      "Groups are being formed for the final project in the next lab",
    ],
    color: "yellow.400",
  },
  {
    id: "5",
    name: "GEOG 110",
    description: "Introduction to Geography",
    section: "A02",
    term: "Fall 2022",
    year: 2022,
    professor: "John Doe",
    completed: true,
    color: "purple.400",
  },
  {
    id: "6",
    name: "MUSC 110",
    description: "Introduction to Music",
    section: "A01",
    term: "Fall 2022",
    year: 2022,
    professor: "Jane Doe",
    completed: true,
    color: "pink.400",
  },
  {
    id: "7",
    name: "PHYS 150",
    description: "Introduction to Physics",
    section: "A01",
    term: "Fall 2022",
    year: 2022,
    professor: "Mark Smith",
    completed: true,
    color: "orange.400",
  },
];

export const sampleDiscussions: Discussion[] = [
  {
    courseID: "1",
    id: "1",
    topic: "What is the best way to study for the midterm?",
    date: "2022-09-01",
    numberReplies: 2,
    replies: [
      {
        date: "2022-09-08",
        content:
          "I think the best way to study is to go over the notes and practice problems.",
        author: "Lily Adams",
      },
      {
        date: "2022-09-09",
        content:
          "I agree with Lily. I also think it's important to make sure you understand the concepts.",
        author: "Jack Hunter",
      },
    ],
    author: "Edward Brown",
  },
  {
    courseID: "1",
    id: "2",
    topic: "Is the final project going to be in groups?",
    date: "2022-10-01",
    numberReplies: 1,
    replies: [
      {
        date: "2022-10-08",
        content:
          "Yes, the final project will be in groups. We will be forming groups in the next lab.",
        author: "Professor Fisher",
      },
    ],
    author: "Andrea Wilson",
  },
  {
    courseID: "2",
    id: "1",
    topic: "What is the best way to study for the midterm?",
    date: "2022-09-01",
    numberReplies: 2,
    replies: [
      {
        date: "2022-09-08",
        content:
          "I think the best way to study is to go over the notes and practice problems.",
        author: "Lily Adams",
      },
      {
        date: "2022-09-09",
        content:
          "I agree with Lily. I also think it's important to make sure you understand the concepts.",
        author: "Jack Hunter",
      },
    ],
    author: "Edward Brown",
  },
  {
    courseID: "2",
    id: "2",
    topic: "Is the final project going to be in groups?",
    date: "2022-10-01",
    numberReplies: 1,
    replies: [
      {
        date: "2022-10-08",
        content:
          "Yes, the final project will be in groups. We will be forming groups in the next lab.",
        author: "Professor Fisher",
      },
    ],
    author: "Andrea Wilson",
  },
  {
    courseID: "3",
    id: "1",
    topic: "What is the best way to study for the midterm?",
    date: "2022-09-01",
    numberReplies: 2,
    replies: [
      {
        date: "2022-09-08",
        content:
          "I think the best way to study is to go over the notes and practice problems.",
        author: "Lily Adams",
      },
      {
        date: "2022-09-09",
        content:
          "I agree with Lily. I also think it's important to make sure you understand the concepts.",
        author: "Jack Hunter",
      },
    ],
    author: "Edward Brown",
  },
  {
    courseID: "3",
    id: "2",
    topic: "Is the final project going to be in groups?",
    date: "2022-10-01",
    numberReplies: 1,
    replies: [
      {
        date: "2022-10-08",
        content:
          "Yes, the final project will be in groups. We will be forming groups in the next lab.",
        author: "Professor Fisher",
      },
    ],
    author: "Andrea Wilson",
  },
  {
    courseID: "4",
    id: "1",
    topic: "What is the best way to study for the midterm?",
    date: "2022-09-01",
    numberReplies: 2,
    replies: [
      {
        date: "2022-09-08",
        content:
          "I think the best way to study is to go over the notes and practice problems.",
        author: "Lily Adams",
      },
      {
        date: "2022-09-09",
        content:
          "I agree with Lily. I also think it's important to make sure you understand the concepts.",
        author: "Jack Hunter",
      },
    ],
    author: "Edward Brown",
  },
  {
    courseID: "4",
    id: "2",
    topic: "Is the final project going to be in groups?",
    date: "2022-10-01",
    numberReplies: 1,
    replies: [
      {
        date: "2022-10-08",
        content:
          "Yes, the final project will be in groups. We will be forming groups in the next lab.",
        author: "Professor Fisher",
      },
    ],
    author: "Andrea Wilson",
  },
  {
    courseID: "5",
    id: "1",
    topic: "What is the best way to study for the midterm?",
    date: "2022-09-01",
    numberReplies: 2,
    replies: [
      {
        date: "2022-09-08",
        content:
          "I think the best way to study is to go over the notes and practice problems.",
        author: "Lily Adams",
      },
      {
        date: "2022-09-09",
        content:
          "I agree with Lily. I also think it's important to make sure you understand the concepts.",
        author: "Jack Hunter",
      },
    ],
    author: "Edward Brown",
  },
  {
    courseID: "5",
    id: "2",
    topic: "Is the final project going to be in groups?",
    date: "2022-10-01",
    numberReplies: 1,
    replies: [
      {
        date: "2022-10-08",
        content:
          "Yes, the final project will be in groups. We will be forming groups in the next lab.",
        author: "Professor Fisher",
      },
    ],
    author: "Andrea Wilson",
  },
  {
    courseID: "6",
    id: "1",
    topic: "What is the best way to study for the midterm?",
    date: "2022-09-01",
    numberReplies: 2,
    replies: [
      {
        date: "2022-09-08",
        content:
          "I think the best way to study is to go over the notes and practice problems.",
        author: "Lily Adams",
      },
      {
        date: "2022-09-09",
        content:
          "I agree with Lily. I also think it's important to make sure you understand the concepts.",
        author: "Jack Hunter",
      },
    ],
    author: "Edward Brown",
  },
  {
    courseID: "6",
    id: "2",
    topic: "Is the final project going to be in groups?",
    date: "2022-10-01",
    numberReplies: 1,
    replies: [
      {
        date: "2022-10-08",
        content:
          "Yes, the final project will be in groups. We will be forming groups in the next lab.",
        author: "Professor Fisher",
      },
    ],
    author: "Andrea Wilson",
  },
];
