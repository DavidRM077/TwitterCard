import React from "react";
import ReactDOM from "react-dom"; // En lugar de 'react-dom/client'
import "./index.css";
import App from "./app";
import Prueba from "./prueba";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <Prueba/>
  </>
);
