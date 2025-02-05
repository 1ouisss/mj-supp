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
      "Renforcer l'immunité",
      "Améliorer l'énergie",
      "Soutenir la santé cérébrale",
      "Gérer le stress",
      "Améliorer le sommeil",
      "Améliorer la digestion"
    ]
  },
  {
    id: 4,
    question: "Avez-vous des préoccupations de santé spécifiques ?",
    type: "multiple",
    options: [
      "Stress, anxiété ou sautes d'humeur",
      "Problèmes digestifs",
      "Préoccupations cardiovasculaires",
      "Problèmes de peau",
      "Déséquilibres hormonaux",
      "Aucune"
    ],
    followUpQuestions: [
      {
        triggerAnswer: "Stress, anxiété ou sautes d'humeur",
        questions: [
          {
            id: 401,
            question: "À quelle fréquence ressentez-vous du stress ?",
            type: "single",
            options: ["Occasionnellement", "Fréquemment", "Constamment"],
            parentQuestionId: 4
          },
          {
            id: 402,
            question: "Évaluez l'intensité de votre stress",
            type: "slider",
            sliderConfig: {
              min: 1,
              max: 10,
              step: 1,
              labels: {
                min: "Léger",
                max: "Sévère"
              }
            },
            parentQuestionId: 4
          }
        ]
      },
      {
        triggerAnswer: "Problèmes digestifs",
        questions: [
          {
            id: 403,
            question: "Quels symptômes digestifs ressentez-vous ?",
            type: "multiple",
            options: [
              "Ballonnements",
              "Indigestion",
              "Transit irrégulier",
              "Brûlures d'estomac"
            ],
            parentQuestionId: 4
          }
        ]
      }
    ]
  },
  {
    id: 6,
    question: "Comment décririez-vous votre alimentation ?",
    type: "single",
    options: [
      "Équilibrée",
      "Végétarienne/Végétalienne",
      "Riche en sucres",
      "Pauvre en légumes",
      "Régime spécifique"
    ]
  },
  {
    id: 7,
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
    id: 8,
    question: "Prenez-vous actuellement des compléments alimentaires ?",
    type: "single",
    options: ["Oui", "Non"],
    followUpQuestions: [
      {
        triggerAnswer: "Oui",
        questions: [
          {
            id: 801,
            question: "Lesquels prenez-vous actuellement ?",
            type: "multiple",
            options: [
              "Vitamines",
              "Minéraux",
              "Oméga-3",
              "Probiotiques",
              "Protéines",
              "Autres"
            ],
            parentQuestionId: 8
          }
        ]
      }
    ]
  }
];