import React, { Component } from "react";
import Maintenance from "./Maintenance";
import MaintenanceList from "./MaintenanceList";
import Totalsum from "../OverView/Totalsum";
export default class MaintenancePage extends Component {
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
      case "newMaintenance":
        return <Maintenance />;
      case "showMaintenanceList":
        return <MaintenanceList />;
      default:
        return <Maintenance />;
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-9">
          <h4>Registering av vedlikehold</h4>
          <ul id="MaintenaceToggel">
            <li>
              <a
                onClick={this.handleClick.bind(this, "newMaintenance")}
                href="#"
              >
                {" "}
                Register vedlikehold
              </a>
            </li>
            <li> </li>
            <li>
              <a
                onClick={this.handleClick.bind(this, "showMaintenanceList")}
                href="#"
              >
                {" "}
                Vis vedlikehold oversikt{" "}
              </a>
            </li>
          </ul>
          <div className="container-fluid">{this._renderSubComp()}</div>
        </div>
        <div class=".col-xs-2">
          <Totalsum />
        </div>
      </div>
    );
  }
}
