import React, { Component } from "react";
import { Link } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonToolbar } from "react-bootstrap";
import LoginModal from "./components/Modal/LoginModal";
import NewUserModal from "./components/Modal/NewUserModal";
import logo from "../images/logo.png";

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
      <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <a className='navbar-brand"' href="#">
            <img src={logo} height="60px" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Hjem
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Fylling
                </a>
              </li>
              <li className="nav-item">
                <Link to="/MaintenancePage" href="#" className="nav-link">
                  Vedlikehold
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Utgifter
                </a>
              </li>
              <li className="nav-item">
                <Link to="/MineTimer" href="#" className="nav-link">
                  Timeføring
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => this.setState({ addModalShow: true })}
                  href="#"
                >
                  <LoginModal
                    show={this.state.addModalShow}
                    onHide={addModalClose}
                    openmodal={this.openmodal}
                  />
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default NavigationBar;

/**<nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
<div class="container-fluid">
	<a class="navbar-brand&quot;" href="#"><img src="img/logo.png" height="60px"></a>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarResponsive">
		<ul class="navbar-nav ml-auto">
			<li class="nav-item active">
				<a class="nav-link" href="#">Hjem</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#">Fylling</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#">Vedlikehold</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#">Utgifter</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#">Timeføring</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#">Administrasjon</a>
			</li>
		</ul>
	</div>
</div>

</nav> */

/**  <nav className="minNav navbar navbar-dark bg-primary">
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
      </nav>*/
