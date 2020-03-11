import React, { Component } from "react";
import Timeforing from "./Timeforing";
import MineTimer from "./MineTimer";
class Timeliste extends Component {
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
        return <Timeforing />;
      case "Timeforing":
        return <Timeforing />;
      case "MineTimer":
        return <MineTimer />;
    }
  }

  render() {
    return (
      <div className="d-flex" id="wrapper">
        <div className="bg-light border-right" id="sidebar-wrapper">
          <div className="sidebar-heading">Time registrering</div>
          <div className="list-group list-group-flush">
            <a
              href="#"
              onClick={this.handleClick.bind(this, "Timeforing")}
              className="list-group-item list-group-item-action bg-light"
            >
              Timeføring
            </a>
            <a
              href="#"
              onClick={this.handleClick.bind(this, "MineTimer")}
              className="list-group-item list-group-item-action bg-light"
            >
              Mine timer
            </a>
          </div>
        </div>

        <body className="container-fluid">{this._renderSubComp()}</body>
      </div>
    );
  }
}

export default Timeliste;
