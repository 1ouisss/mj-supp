
import { Question } from "@/components/quiz/types";

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "Quel est votre sexe ou genre ?",
    type: "single",
    options: ["Femme", "Homme", "Autre", "Je préfère ne pas répondre"]
  },
  {
    id: 2,
    question: "Quel est votre objectif principal de bien-être ?",
    type: "single",
    options: [
      "Améliorer le sommeil",
      "Renforcer l'immunité",
      "Améliorer la digestion",
      "Gérer le stress",
      "Soutenir la santé cérébrale",
      "Améliorer l'énergie",
      "Soulager les migraines",
      "Soutenir la thyroïde"
    ]
  },
  {
    id: 3,
    question: "Avez-vous des préoccupations de santé spécifiques ?",
    type: "multiple",
    options: [
      "Troubles du sommeil",
      "Problèmes digestifs",
      "Stress ou anxiété",
      "Fatigue chronique",
      "Système immunitaire affaibli",
      "Migraines fréquentes",
      "Problèmes de thyroïde",
      "Aucune"
    ],
    followUpQuestions: [
      {
        triggerAnswer: "Troubles du sommeil",
        questions: [
          {
            id: 401,
            question: "À quelle fréquence avez-vous des difficultés à dormir ?",
            type: "single",
            options: ["Occasionnellement", "Fréquemment", "Presque toutes les nuits"],
            parentQuestionId: 3
          }
        ]
      },
      {
        triggerAnswer: "Problèmes digestifs",
        questions: [
          {
            id: 402,
            question: "Quels symptômes digestifs ressentez-vous ?",
            type: "multiple",
            options: [
              "Ballonnements",
              "Digestion difficile",
              "Transit irrégulier",
              "Inconfort intestinal"
            ],
            parentQuestionId: 3
          }
        ]
      }
    ]
  }
];
