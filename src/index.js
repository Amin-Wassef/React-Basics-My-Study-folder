// To create react app => npm init react-app folder_name in the terminal

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import InputComponent from "./Components/Hooks2A";
import Event from "./Components/Dynamic_Events";
import Promo from "./Components/Promo";
import Side from "./Components/Side";
import Hook from "./Components/Hooks";
import Navigation from "./Components/Navigation/Navigation";
import Father from "./Components/Image";
import Covering from "./Components/Video";
import Aud from "./Components/Audio";
import RegisterForm from "./Components/Hooks2B";
import TextInputWithFocusButton from "./Components/UseRefHook";

import { BrowserRouter } from "react-router-dom"; //npm i react-router-dom@6

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>

    <InputComponent />
    <p>
      <RegisterForm />
    </p>
    <p>
      <TextInputWithFocusButton />
    </p>
    <Event />
    <Father />
    <Aud />
    <Covering />
    <Hook />
    <Promo />
    <App />
    <Side />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
