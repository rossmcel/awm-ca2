import React from "react";
import { Box, Flex, Heading, Center, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const NotAuthenticatedView: React.FC = () => {
  return (
    <Box overflow="hidden" mt="3vh" mb="3vh">
      <Box width="80%" minH="90vh" ml="auto" mr="auto">
        <Flex
          direction="column"
          bg="transparent"
          color="black"
          maxW="40%"
          minH="75vh"
          paddingX="0.7rem"
          pt="0.7vh"
          ml="auto"
          mr="auto"
          mt="auto"
          mb="auto"
          border="1px lightgrey solid"
          borderRadius="0.6rem"
        >
          <Heading size="lg" textAlign="center" mt="3vh">
            Not Logged In
          </Heading>
          <Center>
            <NavLink to="/login">
              <Text color="blue">Click here to log in or sign up</Text>
            </NavLink>
          </Center>
        </Flex>
      </Box>
    </Box>
  );
};

export default NotAuthenticatedView;
