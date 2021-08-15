import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { QuizData, UserAnswerType } from "../data/quiz.types";
import { firestore } from "./Firebase.config";

type QuizDataContextApi = {
  showLoader:Boolean;
  setShowLoader:React.Dispatch<React.SetStateAction<Boolean>>;
  userAnswer: UserAnswerType[];
  setUserAnswer: React.Dispatch<React.SetStateAction<UserAnswerType[]>>;
  quizData: QuizData ;
  setQuizData: React.Dispatch<React.SetStateAction<QuizData>>
};

export const QuizContext = createContext<QuizDataContextApi>(
  {} as QuizDataContextApi
);

export const QuizContextProvider = ({ children }: { children: ReactNode }) =>  {

  const [userAnswer, setUserAnswer] = useState < UserAnswerType[] >([]);
  const [ quizData, setQuizData ] = useState < QuizData>({} as QuizData)
  const [showLoader, setShowLoader ] = useState< Boolean >(false)


  useEffect(()=>{
    (async function(){
      setShowLoader((prev)=>!prev)
      try{
        const firebaseData = firestore.collection('quizzes');
        const snapshot  = await firebaseData.get();
         snapshot.forEach(( doc )=>
           {
             console.log(doc.data(), "from first pull - snapshot.data()");
             setQuizData(doc.data().data);
          }
        )
        setShowLoader((prev)=>!prev)
      }catch(error){
          console.log(error,"Error from network call")
        }
    })()
},[])
  console.log(quizData," This quizData is from function")
  return (
    <QuizContext.Provider
      value={{
        userAnswer,
        setUserAnswer,
        showLoader,
        setShowLoader,
        quizData,
        setQuizData
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  return useContext(QuizContext) as QuizDataContextApi;
}
