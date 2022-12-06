import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Input,
  Button,
} from "@chakra-ui/react";

export const SignUpView: React.FC = () => {
  const [firstPasswordInput, setFirstPasswordInput] = useState("");
  const handleFirstPassword = (e: any) => setFirstPasswordInput(e.target.value);

  const [isActive, setIsActive] = useState(false);

  const [secondPasswordInput, setSecondPasswordInput] = useState("");
  const handleSecondPassword = (e: any) => {
    setSecondPasswordInput(e.target.value);
    setIsActive(true);
  };

  const isMatch = firstPasswordInput === secondPasswordInput;

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
            Sign Up
          </Heading>
          <Box mt="3vh">
            <form name="signup" action="signup" method="post">
              <FormControl>
                <FormLabel>
                  <Text fontSize="md" ml="0.3rem">
                    Email
                  </Text>
                </FormLabel>
                <Input
                  id="username"
                  name="username"
                  type="email"
                  placeholder="test@test.com"
                  required
                  padding="0.5rem"
                />
              </FormControl>
              <FormControl mt={6}>
                <FormLabel>
                  <Text fontSize="md" ml="0.3rem">
                    Password
                  </Text>
                </FormLabel>
                <Input
                  type="password"
                  required
                  onChange={handleFirstPassword}
                  padding="0.5rem"
                />
                <FormHelperText>password instructions here</FormHelperText>
              </FormControl>
              <FormControl isInvalid={!isMatch && isActive} mt={6}>
                <FormLabel>
                  <Text fontSize="md" ml="0.3rem">
                    Re-type Password
                  </Text>
                </FormLabel>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  onChange={handleSecondPassword}
                  padding="0.5rem"
                />
                {isMatch ? (
                  <FormHelperText>Passwords match!</FormHelperText>
                ) : (
                  <Box>
                    <FormHelperText>Enter a matching password</FormHelperText>
                    <FormErrorMessage>Passwords must match</FormErrorMessage>
                  </Box>
                )}
              </FormControl>
              <Button width="full" mt={4} type="submit">
                Sign Up
              </Button>
            </form>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default SignUpView;
