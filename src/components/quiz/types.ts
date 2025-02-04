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

export type Gender = "Femme" | "Homme" | "Autre" | "Je préfère ne pas répondre";