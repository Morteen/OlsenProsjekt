import React, { Component } from "react";
import Fuel from "./Fuel";
import Oil from "./Oil";
import Adblue from "./Adblue";

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
      case "Adblue":
        return <Adblue />;
    }
  }

  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <div class=".col-">
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
                  <a
                    href="#"
                    onClick={this.handleClick.bind(this, "Adblue")}
                    className="list-group-item list-group-item-action bg-light"
                  >
                    Adblue
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm">{this._renderSubComp()}</div>

          <div class="col-sm">
            <h1>Hei hei</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Fylling;
