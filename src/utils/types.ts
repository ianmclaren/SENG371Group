export type Term =
  | "All"
  | "Spring 2023"
  | "Fall 2022"
  | "Summer 2022"
  | "Spring 2022"
  | "Fall 2021"
  | "Summer 2021"
  | "Spring 2021";

export type Course = {
  id: string;
  name: string;
  description: string;
  section: string;
  term: Term;
  year: number;
  professor: string;
  completed: boolean;
  notifications?: string[];
  color?: string;
  content?: CourseContent[];
  grades?: Grade[];
  darkColor?: string;
};

export type CourseContent = {
  week: number;
  title: string;
  content: string[];
  completed: boolean;
  resources?: Resource[];
};

export type Grade = {
  name: string;
  weight: number;
  grade?: number;
};

export type Resource = {
  title: string;
  link: string;
};

export type Discussion = {
  courseID: string;
  id: string;
  topic: string;
  date: string;
  numberReplies: number;
  author: string;
  replies: Reply[];
};

export type Reply = {
  date: string;
  content: string;
  author: string;
};

export type Assignment = {
  courseID: string;
  id: string;
  name: string;
  due_date: string;
  weight: number;
  submitted: string;
  graded: string;
};

export type FrequentAction = {
  topic: string;
  courseName: string;
  accessCount: number;
  timeRange: string;
  linkTo: string;
};

export type Group = {
  courseID: string;
  id: string;
  members: number;
  max_members: number;
};

export type Quiz = {
  courseID: string;
  id: string;
  quizName: string;
  due_date: string;
  weight: number;
  questionCount: number;
  submitted: string;
  graded: string;
  synchronous: string;
  percentage: number;
};

export interface Cards {
  title: string;
}