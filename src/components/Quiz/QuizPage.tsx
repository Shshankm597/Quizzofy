import {
  Button,
  Box,
  Center,
  Text,
  Heading,
  Flex,
} from "@chakra-ui/react";
  import { useMediaQuery } from "@chakra-ui/react";
  import { useEffect, useState } from "react";
  import { useNavigate, useParams } from "react-router-dom";
  import { useQuiz } from "../../context/quizContext";
  

export function QuizPage() {
  const {
    userAnswer,
    setUserAnswer,
    quizData,
  } = useQuiz();
  const navigate = useNavigate();
  const { quizId } = useParams();
  const quizid = parseInt(quizId,10)

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const quizLength = quizData.data[0].questions.length + 1;


  useEffect(() => {
    if (currentQuestion === quizData.data[quizid].questions.length) {
      navigate(`/dashboard/${quizid}`, { state: userAnswer });
    }
  }, [currentQuestion]);

    function answerManager(questionNumber: number, optionId: string) {
      if (
        quizLength !== quizData.data[quizid].questions[currentQuestion].questionNumber
      ) {
        setUserAnswer((answers) => [
          ...answers,
          { questionNumber: questionNumber, answer: optionId }
        ]);
        console.log(userAnswer, " answer jane se phle")
        setCurrentQuestion(currentQuestion + 1);
      }
    }

    return (
      <Box
        minH="87vh"
      >
        <Center>
          <Box
            borderRadius="10px"
            border= "1px"
            borderColor= "gray.300"
            boxShadow= "2xl"
            m= "4rem"
            p= "1.5rem"
          >
            {quizData.data[quizid].questions[currentQuestion] && (
            <Flex direction="column">
            <Heading size="md" mb= "4">
                  <span>
                    {quizData.data[quizid].questions[currentQuestion].questionNumber}
                  </span>
                  . {quizData.data[quizid].questions[currentQuestion].question}
            </Heading>
        {quizData.data[quizid].questions[currentQuestion].options.map (
            ({ text, optionId }, idx) => (
                      <Button
                      fontSize="0.8rem"
                      fontWeight="700"
                      outline="none"
                      border="none"
                      backgroundColor="gray.300"
                      py="6"
                      my= "4"
                      mx= "4"
                      cursor="pointer"
                      textTransform="uppercase"
                      transition="0.3s ease"
                      _hover={{
                        backgroundColor: "#3a3833",
                        color: "aliceblue"
                      }}
                        onClick={() =>
                          answerManager(
                            quizData.data[quizid].questions[currentQuestion]
                              .questionNumber,
                            optionId
                          )
                        }
                        key={idx}
                      >
                        <Text textAlign="left"> {text} </Text>
                      </Button>
            )
          )
        }
        </Flex>
        )}
        </Box>
        </Center>
      </Box>
    )
}