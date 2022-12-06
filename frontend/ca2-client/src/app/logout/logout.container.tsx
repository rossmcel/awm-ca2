/**
 * The data for the view component is stored here and passed to the view component.
 */
import axios from "axios";
import { useLocation } from "react-router-dom";
import React from "react";
import LoginView from "./logout.view";

interface LogoutContainerProps {
  auth: boolean;
  setAuth: any;
}

export const LogoutContainer: React.FC<LogoutContainerProps> = ({
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

export default LogoutContainer;
