import { cscSampleContent } from "./sampleData/content";
import {
  Course,
  Discussion,
  FrequentAction,
  Assignment,
  Group,
  Quiz,
} from "./types";

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
    color: "#F56565",
    content: cscSampleContent,
    darkColor: "#9B2C2C",
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
    color: "#4299E1",
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
    darkColor: "#2C5282",
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
    color: "#48BB78",
    darkColor: "#276749",
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
    color: "#ECC94B",
    darkColor: "#B7791F",
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
    color: "#9F7AEA",
    darkColor: "#553C9A",
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
    color: "#ED64A6",
    darkColor: "#97266D",
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
    color: "#ED8936",
    darkColor: "#9C4221",
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

export const sampleAssignments: Assignment[] = [
  {
    courseID: "1",
    id: "1",
    name: "Assignment 1",
    due_date: "2023-01-31",
    weight: 10,
    submitted: "Yes",
    graded: "Yes",
  },
  {
    courseID: "1",
    id: "2",
    name: "Assignment 2",
    due_date: "2023-02-28",
    weight: 10,
    submitted: "Yes",
    graded: "No",
  },
  {
    courseID: "1",
    id: "3",
    name: "Assignment 3",
    due_date: "2023-03-24",
    weight: 10,
    submitted: "No",
    graded: "No",
  },
  {
    courseID: "2",
    id: "1",
    name: "Presentation",
    due_date: "2023-02-12",
    weight: 35,
    submitted: "Yes",
    graded: "No",
  },
  {
    courseID: "2",
    id: "2",
    name: "Assignment 1",
    due_date: "2023-03-01",
    weight: 10,
    submitted: "Yes",
    graded: "Yes",
  },
  {
    courseID: "2",
    id: "4",
    name: "Project",
    due_date: "2023-04-01",
    weight: 40,
    submitted: "No",
    graded: "No",
  },
  {
    courseID: "3",
    id: "1",
    name: "Project",
    due_date: "2023-04-09",
    weight: 80,
    submitted: "No",
    graded: "No",
  },
  {
    courseID: "4",
    id: "1",
    name: "Design Project",
    due_date: "2023-04-03",
    weight: 50,
    submitted: "No",
    graded: "No",
  },
];

export const sampleFrequentActions: FrequentAction[] = [
  {
    topic: "Assignment 1",
    courseName: "CSC 110",
    accessCount: 8,
    timeRange: "48h",
    linkTo: "/course/1/assignments",
  },
  {
    topic: "Discussion 3",
    courseName: "BIO 150",
    accessCount: 5,
    timeRange: "24h",
    linkTo: "/course/2/discussions",
  },
  {
    topic: "Partial Integration",
    courseName: "MATH 150",
    accessCount: 3,
    timeRange: "24h",
    linkTo: "/course/3/assignments",
  },
];

export const sampleGroups: Group[] = [
  {
    courseID: "1",
    id: "1",
    members: 0,
    max_members: 4,
  },
  {
    courseID: "1",
    id: "2",
    members: 0,
    max_members: 4,
  },
  {
    courseID: "1",
    id: "3",
    members: 3,
    max_members: 4,
  },
  {
    courseID: "1",
    id: "4",
    members: 4,
    max_members: 4,
  },
  {
    courseID: "1",
    id: "5",
    members: 0,
    max_members: 4,
  },
];

export const sampleQuizzes: Quiz[] = [
  {
    courseID: "1",
    id: "1",
    quizName: "Quiz 1",
    due_date: "Sep. 30",
    weight: 10,
    questionCount: 30,
    submitted: "Yes",
    graded: "Yes",
    synchronous: "Yes",
    percentage: 88,
  },
  {
    courseID: "1",
    id: "2",
    quizName: "Quiz 2",
    due_date: "Oct. 22",
    weight: 10,
    questionCount: 15,
    submitted: "Yes",
    graded: "Yes",
    synchronous: "No",
    percentage: 78,
  },
  {
    courseID: "1",
    id: "3",
    quizName: "Quiz 3",
    due_date: "Nov. 12",
    weight: 10,
    questionCount: 20,
    submitted: "No",
    graded: "No",
    synchronous: "Yes",
    percentage: 0,
  },
  {
    courseID: "2",
    id: "1",
    quizName: "Quiz 1",
    due_date: "Sep. 30",
    weight: 10,
    questionCount: 30,
    submitted: "Yes",
    graded: "Yes",
    synchronous: "Yes",
    percentage: 88,
  },
  {
    courseID: "2",
    id: "2",
    quizName: "Quiz 2",
    due_date: "Oct. 22",
    weight: 10,
    questionCount: 15,
    submitted: "Yes",
    graded: "Yes",
    synchronous: "No",
    percentage: 72,
  },
  {
    courseID: "2",
    id: "3",
    quizName: "Final Quiz",
    due_date: "Dec. 12",
    weight: 10,
    questionCount: 20,
    submitted: "No",
    graded: "No",
    synchronous: "Yes",
    percentage: 0,
  },
  {
    courseID: "3",
    id: "1",
    quizName: "Quiz 1",
    due_date: "Sep. 30",
    weight: 10,
    questionCount: 30,
    submitted: "Yes",
    graded: "Yes",
    synchronous: "Yes",
    percentage: 93,
  },
  {
    courseID: "3",
    id: "2",
    quizName: "Quiz 2",
    due_date: "Oct. 22",
    weight: 10,
    questionCount: 15,
    submitted: "Yes",
    graded: "Yes",
    synchronous: "No",
    percentage: 78,
  },
  {
    courseID: "3",
    id: "3",
    quizName: "Quiz 3",
    due_date: "Nov. 30",
    weight: 10,
    questionCount: 20,
    submitted: "Yes",
    graded: "No",
    synchronous: "Yes",
    percentage: 0,
  },
];
