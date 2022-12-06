/**
 * The data for the view component is stored here and passed to the view component.
 */
import axios from "axios";
import { useLocation } from "react-router-dom";
import React from "react";
import SignUpView from "./signup.view";

export const SignUpContainer: React.FC = () => {
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  };

  const baseURL = usePathname();

  React.useEffect(() => {
    axios.get(baseURL);
  }, []);

  return <SignUpView />;
};

export default SignUpContainer;
