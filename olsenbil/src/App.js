import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./Client/NavigationBar";
import { Router } from "react-router";
import routes from "./Client/routes";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <NavigationBar />
        {this.props.children}
      </div>
    </Provider>
  );
}

export default App;
