import { useLocation, useParams, NavLink } from "react-router-dom";
import { UserAnswerType } from "../../data/quiz.types";
import { Box, Center, Text, Heading, Button, Flex } from "@chakra-ui/react";
import { useQuiz } from "../../Context/quizContext";

export function Dashboard() {
  const userAns = useLocation().state as UserAnswerType[];
  console.log(userAns, "answer aya");
  const { userAnswer, setUserAnswer, quizData } = useQuiz();

  let { quizId } = useParams();

  let quizid: number = parseInt(quizId, 10);

  const score: number =
    userAns &&
    quizData.data[quizid].questions.reduce((prev: number, question) => {
      const ansObj = userAns.find(
        (ans) => ans.questionNumber === question.questionNumber
      );
      if (ansObj!.answer === question.answer) {
        return prev + 1;
      }
      return prev;
    }, 0);

  function isRightStyle(
    qAnswer: string,
    ansObjAnswer: string | undefined,
    optionId: string
  ) {
    // eslint-disable-next-line no-lone-blocks
    {
      if (ansObjAnswer === optionId) {
        if (ansObjAnswer === qAnswer) {
          return "isRight";
        } else return "isWrong";
      } else if (optionId === qAnswer) {
        return "isRight";
      }
      return "";
    }
  }

  return (
    <Box minH="87vh">
      <Center>
        <Box
          borderRadius="10px"
          border="1px"
          borderColor="gray.300"
          boxShadow="2xl"
          m="4rem"
          p="1.5rem"
        >
          <Flex direction="column">
            <Heading size="md" mb="4">
              Welcome to dashboard
              <Text> {userAns && `Score: ${score}/${userAns.length}`}</Text>
            </Heading>
            <Box textAlign="left" m="1" maxW="800px" minW="300px" p="1.5rem">
              {userAns &&
                quizData.data[quizid].questions.map((question) => {
                  const ansObj = userAns.find(
                    (ans) => ans.questionNumber === question.questionNumber
                  );
                  console.log(ansObj, "ye ansObj hai");
                  const toPassInIsRight = ansObj?.answer;
                  return (
                    <Box p="0.5rem" mb="1rem">
                      <Text
                        fontSize="xl"
                        p="0.5rem"
                        fontWeight="bold"
                        mb="2"
                        mt="2"
                      >
                        {question.questionNumber}.{question.question}
                      </Text>
                      {question.options.map((option, idx) => {
                        return (
                          <Box key={idx}>
                            <Text
                              className={isRightStyle(
                                question.answer,
                                toPassInIsRight,
                                option.optionId
                              )}
                              fontSize="0.8rem"
                              py="1"
                              px="1"
                              my="2"
                              mx="1"
                              textTransform="uppercase"
                            >
                              {option.text}
                            </Text>
                          </Box>
                        );
                      })}
                    </Box>
                  );
                })}
              <Box>
                <Box>
                  {!userAns && (
                    <Box>
                      {" "}
                      Please attempt the quiz
                      <NavLink to="/">
                        <Button
                          height="auto"
                          p="1.5rem"
                          m="1rem"
                          whiteSpace="normal"
                          justifyContent="flex-start"
                          color="#ffff"
                          bg="#83C3C3"
                          className="setquiz"
                          borderRadius="20px"
                        >
                          {" "}
                          go to quiz{" "}
                        </Button>
                      </NavLink>
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Center>
      <Center>
        <NavLink to="/">
          <Button
            onClick={() => {
              setUserAnswer([]);
              return console.log("This is dashboard", userAnswer);
            }}
            fontSize="0.8rem"
            fontWeight="700"
            outline="none"
            border="none"
            backgroundColor="#1d1d1d"
            color="aliceblue"
            p="6"
            mb="8"
            cursor="pointer"
            textTransform="uppercase"
            transition="0.3s ease"
            _hover={{
              backgroundColor: "#3a3833",
            }}
          >
            Go to New Quiz
          </Button>
        </NavLink>
      </Center>
    </Box>
  );
}
