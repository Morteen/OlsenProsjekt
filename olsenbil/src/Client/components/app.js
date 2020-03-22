import React from "react";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "../NavigationBar";
import { Provider } from "react-redux";
import store from "../../store";
import FyllingStats from "../components/Fylling/FyllingStats";

export default class app extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container-fluid">
          <NavigationBar />

          {this.props.children}
        </div>
      </Provider>
    );
  }
}
