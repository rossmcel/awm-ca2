import React from "react";
import { Box } from "@chakra-ui/react";

export const Home: React.FC = () => {
  return (
    <Box overflow="hidden" mb="15rem">
      <Box
        display={{ base: "block", sm: "initial" }}
        width="80%"
        ml="auto"
        mr="auto"
        mt="0.2rem"
        borderBottom="1px solid lightgrey"
      ></Box>
    </Box>
  );
};

export default Home;
