import React, { Component } from "react";
import RegTimer from "./RegTimer";
import RegTurer from "./RegTurer";
export default class Timeforing extends Component {
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
        return <RegTimer />;
      case "RegTimer":
        return <RegTimer />;
      case "RegTurer":
        return <RegTurer />;
    }
  }

  render() {
    return (
      <div>
        <h4>Registering av timer og turer</h4>
        <ul id="timeforingToggel">
          <li>
            <a onClick={this.handleClick.bind(this, "RegTimer")} href="#">
              {" "}
              Register mine timer
            </a>
          </li>
          <li> </li>
          <li>
            <a onClick={this.handleClick.bind(this, "RegTurer")} href="#">
              {" "}
              Registere mine turer{" "}
            </a>
          </li>
        </ul>
        <div id="test">{this._renderSubComp()}</div>
      </div>
    );
  }
}
