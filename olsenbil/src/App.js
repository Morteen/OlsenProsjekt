import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./Client/NavigationBar";
import { Router } from "react-router";
import routes from "./Client/routes";

function App() {
  return (
    <div className="App">
      <NavigationBar />
    </div>
  );
}

export default App;
