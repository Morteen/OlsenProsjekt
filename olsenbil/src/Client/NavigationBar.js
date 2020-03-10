import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";

export default () => {
  return (
    <nav className="minNav navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">
            Bilrapport
          </Link>
        </div>
        <div class="dropdown">
          <button
            class="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link to="/Fylling" className="dropdown-item">
              Fylling
            </Link>

            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </div>

        <div className="navbar-header">
          <Link to="/Login" className="navbar-brand">
            Logg inn
          </Link>
        </div>
        <div className="navbar-header">
          <Link to="/signup" className="navbar-brand">
            Register deg
          </Link>
        </div>
        <div className="navbar-header">
          <Link to="/About" className="navbar-brand">
            Om oss
          </Link>
        </div>
      </div>
    </nav>
  );
};
