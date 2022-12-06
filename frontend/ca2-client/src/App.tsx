import axios from "axios";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./app/home";
import { Login } from "./app/login";
import { SignUp } from "./app/signup";
import { PageNotFound } from "./app/404";
import { Footer } from "./shared/footer";
import "./App.css";

const App: React.FC = () => {
  const [auth, setAuth] = React.useState(false);

  const checkLoginStatus = () => {
    axios
      .get("api/isauthenticated", { withCredentials: true })
      .then(function (response) {
        if (response.data === "api/notauthenticated") {
          setAuth(false);
          // userObjectContext.auth = false;
        } else {
          setAuth(true);
          // userObjectContext.auth = true;
        }
      })
      .catch(function (error) {
        console.log("Axios Error in authProvider");
        setAuth(false);
        // userObjectContext.auth = false;
      });
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);
  return (
    <BrowserRouter>
      <div>
        <Navigation auth={auth} />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dev />} />
          <Route path="/dev" element={<Dev2 />} />
          <Route
            path="/login"
            element={<Login auth={auth} setAuth={setAuth} />}
          />
          <Route
            path="/logout"
            element={<Logout auth={auth} setAuth={setAuth} />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/notauthenticated" element={<NotAuthenticated />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer topText="Created with React JS" bottomText="Version 1.0" />
    </BrowserRouter>
  );
};

export default App;
