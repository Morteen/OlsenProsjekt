import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router";

export default () => {
  return (
    <nav className="minNav navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">
            Bilrapport
          </Link>
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
/**
 *  <nav className="minNav navbar navbar-dark bg-primary">
      <div className="container-fluid">

        <div className="navbar-header">
       
        <Link to="/" className="navbar-brand">Sharkpool</Link>
       
        </div >
        <div > 
            {isAuthenticated ? userLinks : guestLinks}
               </div>
        
       


    </div>
</nav>
 */

/**
  *   <Navbar>
      <Navbar.Brand href="#">
        {" "}
        <Link to="/">BilRapport</Link>
      </Navbar.Brand>
      <Navbar.Toggle />

      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <Link to="/signup">Register deg</Link>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  * 
  */
