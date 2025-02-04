export interface Question {
  id: number;
  question: string;
  type: "single" | "multiple";
  options: string[];
}

export interface Answer {
  questionId: number;
  answers: string[];
}