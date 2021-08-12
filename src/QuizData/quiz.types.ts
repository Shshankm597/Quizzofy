export type Option = {
    text: string;
    isRight: boolean;
  };

export type Question = {
    questionNumber: number;
    question: string;
    points: number;
    options: Option[];
    answer: string;
  };

export type Quiz = {
    quizName: string;
    totalPoints: number;
    totalQuestion: number;
    questions: Question[];
  };

export type QuizData = {
    data: Quiz[];
  };
  