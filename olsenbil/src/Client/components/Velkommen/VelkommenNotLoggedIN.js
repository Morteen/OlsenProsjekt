import React, { Component } from "react";
import VelkommenCredentials from "./VelkommenCredentials";
import Figure from "./Figure";
import Carusel from "./Carusel";

export default class VelkommenNotLoggedIN extends Component {
  render() {
    return (
      <div>
        <Carusel />
        <Figure />
        <VelkommenCredentials />
      </div>
    );
  }
}
