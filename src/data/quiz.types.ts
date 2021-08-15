import { Dispatch, SetStateAction } from "react";

export type Option = {
    text: string;
    optionId: string;
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

  export type AnswerManager = {
    currentQuestion: number;
    isRight: boolean;
    setCurrentQuestion: Dispatch<SetStateAction<number>>;
    setUserAnswer: Dispatch<SetStateAction<boolean[]>>;
  };

  export type UserAnswerType = {
    questionNumber: number;
    answer: string;
  }