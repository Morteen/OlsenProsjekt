import React from "react";
import { Component } from "react";

import NavigationBar from "../NavigationBar";
import { Router } from "react-router";
import routes from "../routes";

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
