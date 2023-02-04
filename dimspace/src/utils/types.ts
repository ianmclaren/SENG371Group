type Term = "Fall" | "Spring" | "Summer";

export type Course = {
  id: string;
  name: string;
  description: string;
  section: string;
  term: Term;
  year: number;
  professor: string;
  completed: boolean;
};
