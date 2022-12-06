import axios from "axios";
import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";

interface LogoutViewProps {
  auth: boolean;
  setAuth: any;
}

export const LogoutView: React.FC<LogoutViewProps> = ({ auth, setAuth }) => {
  useEffect(() => {
    axios
      .post("logout")
      .then(function (response) {
        if (response.data === "/loggedout") {
          console.log("Logged Out: " + response.data);
          setAuth(false);
        } else {
          console.log("Error logging out: " + response.data);
        }
      })
      .catch(function (error) {
        console.log("Axios Error");
      });
  }, []);
  return (
    <Box overflow="hidden" mt="3vh" mb="3vh">
      <Box width="80%" minH="90vh" ml="auto" mr="auto">
        Logged out - NOTE: put react state here
      </Box>
    </Box>
  );
};

export default LogoutView;
