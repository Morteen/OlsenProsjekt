import React, { Component } from "react";
import { Link } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonToolbar } from "react-bootstrap";
import LoginModal from "./components/Modal/LoginModal";
import NewUserModal from "./components/Modal/NewUserModal";

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.openmodal = this.openmodal.bind(this);
    this.openmodalUser = this.openmodalUser.bind(this);
    this.state = {
      addModalShow: false,
      addModalShowUser: false
    };
  }
  openmodal(test) {
    this.setState({ addModalShow: test });
  }
  openmodalUser(test) {
    this.setState({ addModalShowUser: test });
  }

  render() {
    let addModalClose = () => this.setState({ addModalShow: false });
    let addModalCloseUser = () => this.setState({ addModalShowUser: false });
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

          <div className="navbar-header"></div>
          <div className="navbar-header">
            <Link to="/DevelopSite" className="navbar-brand">
              DevelopSite
            </Link>
          </div>
          <div className="navbar-header"></div>
          <div className="navbar-header">
            <Link to="/About" className="navbar-brand">
              Om oss
            </Link>

            <ButtonToolbar>
              <Button
                variant="primary"
                onClick={() => this.setState({ addModalShow: true })}
              >
                Login Modal
              </Button>
              <LoginModal
                show={this.state.addModalShow}
                onHide={addModalClose}
                openmodal={this.openmodal}
              />
              <Button
                variant="primary"
                onClick={() => this.setState({ addModalShowUser: true })}
              >
                Register Modal
              </Button>
              <NewUserModal
                show={this.state.addModalShowUser}
                onHide={addModalCloseUser}
                openmodal={this.openmodalUser}
              />
            </ButtonToolbar>
          </div>
        </div>
      </nav>
    );
  }
}
export default NavigationBar;
