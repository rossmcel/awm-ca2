import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import HomeView from "./home.view";

export const HomeContainer: React.FC = () => {
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  };

  const baseURL = usePathname();

  const navigate = useNavigate();
  const redirect = () => {
    navigate("/login");
  };

  React.useEffect(() => {
    axios
      .get(baseURL)
      .then(function (response) {
        if (response.data === "/login") {
          console.log(response.data);
          redirect();
        }
      })
      .catch(function (error) {
        console.log("Axios Error in Home: " + error);
      });
  }, []);

  return <HomeView />;
};

export default HomeContainer;
