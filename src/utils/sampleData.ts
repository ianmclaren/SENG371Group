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
        content: "I think the best way to study is to go over the notes and practice problems.",
        author: "Lily Adams",
      },
      {
        date: "2022-09-09",
        content: "I agree with Lily. I also think it's important to make sure you understand the concepts.",
        author: "Jack Hunter",
      }
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
        content: "Yes, the final project will be in groups. We will be forming groups in the next lab.",
        author: "Professor Fisher", 
      }
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
        content: "I think the best way to study is to go over the notes and practice problems.",
        author: "Lily Adams",
      },
      {
        date: "2022-09-09",
        content: "I agree with Lily. I also think it's important to make sure you understand the concepts.",
        author: "Jack Hunter",
      }
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
        content: "Yes, the final project will be in groups. We will be forming groups in the next lab.",
        author: "Professor Fisher", 
      }
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
        content: "I think the best way to study is to go over the notes and practice problems.",
        author: "Lily Adams",
      },
      {
        date: "2022-09-09",
        content: "I agree with Lily. I also think it's important to make sure you understand the concepts.",
        author: "Jack Hunter",
      }
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
        content: "Yes, the final project will be in groups. We will be forming groups in the next lab.",
        author: "Professor Fisher", 
      }
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
        content: "I think the best way to study is to go over the notes and practice problems.",
        author: "Lily Adams",
      },
      {
        date: "2022-09-09",
        content: "I agree with Lily. I also think it's important to make sure you understand the concepts.",
        author: "Jack Hunter",
      }
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
        content: "Yes, the final project will be in groups. We will be forming groups in the next lab.",
        author: "Professor Fisher", 
      }
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
        content: "I think the best way to study is to go over the notes and practice problems.",
        author: "Lily Adams",
      },
      {
        date: "2022-09-09",
        content: "I agree with Lily. I also think it's important to make sure you understand the concepts.",
        author: "Jack Hunter",
      }
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
        content: "Yes, the final project will be in groups. We will be forming groups in the next lab.",
        author: "Professor Fisher", 
      }
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
        content: "I think the best way to study is to go over the notes and practice problems.",
        author: "Lily Adams",
      },
      {
        date: "2022-09-09",
        content: "I agree with Lily. I also think it's important to make sure you understand the concepts.",
        author: "Jack Hunter",
      }
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
        content: "Yes, the final project will be in groups. We will be forming groups in the next lab.",
        author: "Professor Fisher", 
      }
    ],
    author: "Andrea Wilson",
  }
];

