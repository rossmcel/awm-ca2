
import { useContext } from "react";
import AuthContext from "../../context/authContext";
import {
    Box
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
    <Box>
      <form onSubmit={handleSubmit} >
        <h1>Login</h1>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="Enter Username" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter Password" />
        <button type="submit">Login</button>
      </form>
      </Box>
  );
};

export default LoginPage;