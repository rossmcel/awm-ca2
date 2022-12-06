/**
 * The data for the view component is stored here and passed to the view component.
 */
import axios from "axios";
import { useLocation } from "react-router-dom";
import React from "react";
import LoginView from "./login.view";

interface LoginContainerProps {
  auth: boolean;
  setAuth: any;
}

export const LoginContainer: React.FC<LoginContainerProps> = ({
  auth,
  setAuth,
}) => {
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  };

  const baseURL = usePathname();

  React.useEffect(() => {
    axios.get(baseURL);
  }, []);

  return <LoginView auth={auth} setAuth={setAuth} />;
};

export default LoginContainer;
