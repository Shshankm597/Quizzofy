import { Flex, Box, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import banner from "../../images/banner.jpg";
import { QuizSelectionCard } from "../Quiz/QuizSelectionCard";


export function Banner() {
  const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
  
  return (
    <Box
      backgroundImage={banner}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      w="100%"
      h={isSmallerThan600 ? "40vh" : "60vh"}
    >
      <Flex
        h="inherit"
        alignItems="center"
        justifyContent="flex-start"
        pl= {isSmallerThan600 ? "8" : "36"}
      >
        <Box w={isSmallerThan600 ? "80%" : "60%"} mt="1rem">
          <Text
            fontSize={isSmallerThan600 ? "1.5rem" : "2.5rem"}
            fontWeight="bold"
            color="coral"
          >
            Assess your knowledge <h1>of Fashion with</h1> US
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export function Home() {
  return (
    <>
      <Banner />
      <QuizSelectionCard />
    </>
  );
}