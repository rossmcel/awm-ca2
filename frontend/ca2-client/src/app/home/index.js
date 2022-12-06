import React from "react";
import { useContext } from "react";
import { Box } from "@chakra-ui/react";
import AuthContext from "../../context/authContext";
import UserInfo from "../userinfo";

export const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <section>
      {user && <UserInfo user={user} />}
      <h1>You are on home page!</h1>
    </section>
  );
};

export default Home;
