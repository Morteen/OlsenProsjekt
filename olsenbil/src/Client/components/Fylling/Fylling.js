import React, { Component } from "react";
import Fuel from "./Fuel";
import Oil from "./Oil";

class Fylling extends Component {
  constructor() {
    super();
    this.state = { render: "" };
  }
  handleClick(compName, e) {
    console.log(compName);
    this.setState({ render: compName });
  }
  _renderSubComp() {
    switch (this.state.render) {
      case "":
        return <Fuel />;
      case "Fuel":
        return <Fuel />;
      case "Oil":
        return <Oil />;
    }
  }

  render() {
    return (
      <div className="d-flex" id="wrapper">
        <div className="bg-light border-right" id="sidebar-wrapper">
          <div className="sidebar-heading">Fylling </div>
          <div className="list-group list-group-flush">
            <a
              href="#"
              onClick={this.handleClick.bind(this, "Fuel")}
              className="list-group-item list-group-item-action bg-light"
            >
              Drivstoff
            </a>
            <a
              href="#"
              onClick={this.handleClick.bind(this, "Oil")}
              className="list-group-item list-group-item-action bg-light"
            >
              Olje
            </a>
          </div>
        </div>

        <body id="test">{this._renderSubComp()}</body>
      </div>
    );
  }
}

export default Fylling;
