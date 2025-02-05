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
    question: "À quel groupe d'âge appartenez-vous ?",
    type: "single",
    options: ["<18", "18-35", "36-50", "51+"]
  },
  {
    id: 3,
    question: "Quel est votre objectif principal de bien-être ?",
    type: "single",
    options: [
      "Améliorer le sommeil",
      "Renforcer l'immunité",
      "Améliorer la digestion",
      "Gérer le stress",
      "Soutenir la santé cérébrale",
      "Améliorer l'énergie"
    ]
  },
  {
    id: 4,
    question: "Avez-vous des préoccupations de santé spécifiques ?",
    type: "multiple",
    options: [
      "Troubles du sommeil",
      "Problèmes digestifs",
      "Stress ou anxiété",
      "Fatigue chronique",
      "Système immunitaire affaibli",
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
            parentQuestionId: 4
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
            parentQuestionId: 4
          }
        ]
      }
    ]
  },
  {
    id: 5,
    question: "Comment décririez-vous votre alimentation ?",
    type: "single",
    options: [
      "Équilibrée",
      "Végétarienne/Végétalienne",
      "Riche en produits transformés",
      "Pauvre en fibres",
      "Régime spécifique"
    ]
  },
  {
    id: 6,
    question: "Combien d'heures dormez-vous en moyenne par nuit ?",
    type: "slider",
    sliderConfig: {
      min: 4,
      max: 12,
      step: 0.5,
      labels: {
        min: "4h ou moins",
        max: "12h ou plus"
      }
    }
  },
  {
    id: 7,
    question: "Prenez-vous actuellement des compléments naturels ?",
    type: "single",
    options: ["Oui", "Non"],
    followUpQuestions: [
      {
        triggerAnswer: "Oui",
        questions: [
          {
            id: 701,
            question: "Lesquels prenez-vous actuellement ?",
            type: "multiple",
            options: [
              "Produits pour le sommeil",
              "Produits digestifs",
              "Produits relaxants",
              "Produits énergisants",
              "Autres"
            ],
            parentQuestionId: 7
          }
        ]
      }
    ]
  }
];