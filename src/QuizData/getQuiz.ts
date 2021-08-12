import { Quiz } from "./quiz.types";

const quizzes: Quiz = [
{
  quizName: "Do you know what's Important in Fashion?",
  totalPoints: 30,
  totalQuestion: 3,
  questions: [
    {
      questionNumber: 1,
      question: "What Should Be More Important To A Man: ",
      points: 10,
      options: [
        {
          text: "Style",
          isRight: true,
        },
        {
          text: "Fashion",
          isRight: false,
        },
      ],
      answer: "Style",
    },
    {
      questionNumber: 2,
      question: "What's More Important: Clothing Fit or Clothing Brand?",
      points: 10,
      options: [
        {
          text: "Clothing Fit",
          isRight: true,
        },
        {
          text: "Clothing Brand",
          isRight: false,
        },
      ],
      answer: "Clothing Fit",
    },
    {
      questionNumber: 3,
      question: "Does Clothing Brand Actually Matter? Yes or No?",
      points: 10,
      options: [
        {
          text: "No",
          isRight: false,
        },
        {
          text: "Yes",
          isRight: true,
        },
      ],
      answer: "Yes",
    },
  ],
},
{
quizName: "Let's guess some Fashion Brands?",
totalPoints: 30,
totalQuestion: 3,
questions: [
  {
    questionNumber: 1,
    question: "Which brand is ‘The Brand with 3 Stripes’?",
    points: 10,
    options: [
      {
        text: "Sketchers",
        isRight: false,
      },
      {
        text: "Adidas",
        isRight: true,
      },
      {
        text: "Both a and b",
        isRight: false,
      },
      {
        text: "None of these",
        isRight: false,
      },
    ],
    answer: "Adidas",
  },
  {
    questionNumber: 2,
    question: "Which brand name means ‘For Us By Us’?",
    points: 10,
    options: [
      {
        text: "UBfU",
        isRight: false,
      },
      {
        text: "BUFU",
        isRight: false,
      },
      {
        text: "FUB",
        isRight: false,
      },
      {
        text: "FUBU",
        isRight: true,
      },
    ],
    answer: "FUBU",
  },
  {
    questionNumber: 3,
    question: "Which Fashion brnad has two G's in it's logo?",
    points: 10,
    options: [
      {
        text: "Marc Jacobs",
        isRight: false,
      },
      {
        text: "Kangol",
        isRight: false,
      },
      {
        text: "Gucci",
        isRight: true,
      },
      {
        text: "Liz Claiborne",
        isRight: false,
      },
    ],
    answer: "Yes",
  },
],
}];

export { quizzes };
