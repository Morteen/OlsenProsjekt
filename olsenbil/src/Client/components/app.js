import React from "react";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "../NavigationBar";
export default class app extends Component {
  render() {
    return (
      <div className="container-fluid">
        <NavigationBar />
        {this.props.children}
      </div>
    );
  }
}
