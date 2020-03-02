import React from "react";
import Navbar from "react-bootstrap/Navbar";

export default () => {
  return (
    <Navbar>
      <Navbar.Brand href="#">Bilrapport</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <a href="#">Login</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};
