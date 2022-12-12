
import { useContext } from "react";
import AuthContext from "../../context/authContext";
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

export const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
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
              <FormLabel htmlFor="username">
                <Text fontSize="md" ml="0.3rem">
                  Email
                </Text>
              </FormLabel>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="test@test.com"
                required
                padding="0.5rem"
              />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel htmlFor="username">
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
              Login
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  </Box>
  );
};

export default LoginPage;