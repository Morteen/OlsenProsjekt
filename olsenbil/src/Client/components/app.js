import React from "react";
import { Component } from "react";
import NavigationBar from "../NavigationBar";
export default class app extends Component {
  render() {
    return (
      <div className="container">
        <NavigationBar />
        {this.props.children}
      </div>
    );
  }
}
