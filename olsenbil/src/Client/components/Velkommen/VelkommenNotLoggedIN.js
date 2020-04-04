import React, { Component } from "react";
import VelkommenCredentials from "./VelkommenCredentials";
import Figure from "./Figure";

export default class VelkommenNotLoggedIN extends Component {
  render() {
    return (
      <div>
        <Figure />
        <VelkommenCredentials />
      </div>
    );
  }
}
