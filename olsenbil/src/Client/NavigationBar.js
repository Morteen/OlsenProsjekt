import React from "react";
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
        <div className="dropdown">
          <span
            className="navbar-brand"
            //className="btn btn-primary dropdown-toggle"
            //type="button"
            //id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Våre tjenester
          </span>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link to="/Timeliste" className="dropdown-item">
              Timeliste
            </Link>
            <Link to="/MaintenancePage" className="dropdown-item">
              Vedlikehold
            </Link>
            <Link to="/Fylling" className="dropdown-item">
              Fylling
            </Link>
          </div>
        </div>

        <div className="dropdown">
          <span
            className="navbar-brand"
            //className="btn btn-primary dropdown-toggle"
            //type="button"
            //id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Timer
          </span>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link to="/MineTimer" className="dropdown-item">
              Timeliste
            </Link>
          </div>
        </div>

        <div className="navbar-header">
          <Link to="/Login" className="navbar-brand">
            Logg inn
          </Link>
        </div>
        <div className="navbar-header">
          <Link to="/DevelopSite" className="navbar-brand">
            DevelopSite
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
