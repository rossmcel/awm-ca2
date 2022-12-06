import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";

interface LoginViewProps {
  auth: boolean;
  setAuth: any;
}

export const LoginView: React.FC<LoginViewProps> = ({ auth, setAuth }) => {
  const handleSubmit = (event: any) => {
    // axios
    //   .post(
    //     "http://localhost:3001/sessions",
    //     {
    //       user: {
    //         email: email,
    //         password: password
    //       }
    //     },
    //     { withCredentials: true }
    //   )
    //   .then(response => {
    //     if (response.data.logged_in) {
    //       this.props.handleSuccessfulAuth(response.data);
    //     }
    //   })
    //   .catch(error => {
    //     console.log("login error", error);
    //   });
    // event.preventDefault();
    setAuth(false);
  };

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
            Login
          </Heading>
          <Box mt="3vh">
            <form
              onSubmit={handleSubmit}
              name="login"
              action="login"
              method="post"
            >
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
                  id="password"
                  name="password"
                  type="password"
                  required
                  padding="0.5rem"
                />
                <FormHelperText>password instructions here</FormHelperText>
              </FormControl>
              <Button width="full" mt={4} type="submit">
                Sign In
              </Button>
            </form>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default LoginView;
