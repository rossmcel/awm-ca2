import axios from "axios";
import './App.css';
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate, HashRouter } from "react-router-dom";
import { Home } from "./app/home";
import { LoginPage } from "./app/login";
import { NotAuthenticated } from "./app/not-authenticated";
import { SignUp } from "./app/signup";
import { PageNotFound } from "./app/404";
import { Footer } from "./shared/footer";
import { AuthProvider } from "./context/authContext";
import PrivateRoute from "./utils/PrivateRoute";
import ProtectedPage from "./utils/protectedPage";
import Register from "./app/register";
import NavbarLocal from "./app/navbar";

const App = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('worker.js').then(function(registration) {
        console.log('Worker registration successful', registration.scope);
      }, function(err) {
        console.log('Worker registration failed', err);
      }).catch(function(err) {
        console.log(err);
      });
    });
  } else {
    console.log('Service Worker is not supported by browser.');
  }
  return (
    <BrowserRouter>
      <div>
        <AuthProvider>
          <NavbarLocal />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </AuthProvider>
      </div>
      <Footer topText="Created with React JS" bottomText="Version 1.0" />
    </BrowserRouter>
  );
};

export default App;
