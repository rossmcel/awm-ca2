import { Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/authContext";

export const PrivateRoute = ({ children}) => {
  let { user } = useContext(AuthContext);
  
  if (!user) {
      // not logged in so redirect to login page with the return url
      return <Navigate to="/login" />
  }

  // authorized so return child components
  return children;
};

export default PrivateRoute;