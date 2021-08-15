import { useNavigate } from "react-router-dom";
import {
  Spinner,
  Button,
  Box,
  Text,
  Center,
  Flex,
  useMediaQuery,
} from "@chakra-ui/react";
import { useQuiz } from "../../context/quizContext";

export function QuizSelectionCard() {
  const navigate = useNavigate();
  const [isSmallerThan600] = useMediaQuery("(max-width:600px)");

  const { quizData, showLoader } = useQuiz();
  return (
    <Center mt="4rem" h="auto">
      {showLoader ? (
        <Box h="100vh">
          <Spinner
            size="xl"
            color="coral"
            label="loading data"
            boxSize="10rem"
          />
        </Box>
      ) : (
        <Flex direction="column">
          <Center mb="10">
            <Text fontSize="4xl" fontWeight="bold">
              Quiz Time ✨
            </Text>
          </Center>
          <Flex
            direction={isSmallerThan600 ? "column" : "row"}
            justifyContent="space-around"
            alignItems="center"
          >
            {quizData.data &&
              quizData.data.map((item, idx: number) => {
                console.log("from Quiz Selection ", item);
                return (
                  <Box
                    cursor="pointer"
                    w="20.5rem"
                    py= "3"
                    px ="5"
                    bg="#ffe6d6"
                    borderRadius="1rem"
                    mx={isSmallerThan600 ? "2" : "32"}
                    mb="7"
                    className="banner-img"
                  >
                    <Box p="1rem">
                      <Text fontWeight="bold" fontSize="xl" mb= "3">
                        {item.quizName}
                      </Text>
                      <li> Time: 3 minutes </li>
                      <li> Total Questions: {item.totalQuestion} </li>
                      <li> Total Points: {item.totalPoints} </li>
                    </Box>
                    <Center>
                      <Button
                        onClick={() => navigate(`/quiz/${idx}`)}
                        fontSize="0.8rem"
                        fontWeight="700"
                        outline="none"
                        border="none"
                        backgroundColor="#1d1d1d"
                        color="aliceblue"
                        p="2"
                        my= "4"
                        cursor="pointer"
                        textTransform="uppercase"
                        transition="0.3s ease"
                        _hover={{
                          backgroundColor: "#3a3833",
                        }}
                      >
                        Start Quiz
                      </Button>
                    </Center>
                  </Box>
                );
              })}
          </Flex>
        </Flex>
      )}
    </Center>
  );
}
