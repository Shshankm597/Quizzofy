import { Box, Flex, Text, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <Box overflowX="hidden" boxShadow="lg">
      <Flex minH={"20px"} py={{ base: 2 }} px={{ base: 4 }} bfeImage>
        <Box>
          <Link to="/">
            <Text p="1rem" fontSize="2xl" fontWeight="800">
              Quizzofy
            </Text>
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Text p="1rem" fontSize="xl" fontWeight="bold">
            Hi, Welcome!
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
