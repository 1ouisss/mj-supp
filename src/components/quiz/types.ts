export type Gender = "Femme" | "Homme" | "Autre" | "Je préfère ne pas répondre";

export type QuestionType = "single" | "multiple" | "slider" | "follow-up" | "conditional";

export interface Question {
  id: number;
  question: string;
  type: QuestionType;
  options?: string[];
  sliderConfig?: {
    min: number;
    max: number;
    step: number;
    labels?: {
      min: string;
      max: string;
    };
  };
  followUpQuestions?: {
    triggerAnswer: string;
    questions: Question[];
  }[];
  parentQuestionId?: number;
}

export interface Answer {
  questionId: number;
  answers: Array<string | number>;
  followUpAnswers?: Answer[];
}

export interface LifestyleInfo {
  diet: string;
  sleepHours: number;
  activityLevel: string;
  currentSupplements: string[];
}

export interface UserProfile {
  age: string;
  gender: Gender;
  lifestyle: LifestyleInfo;
  healthConcerns: {
    type: string;
    severity: number;
  }[];
}