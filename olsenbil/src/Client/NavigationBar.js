import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonToolbar } from "react-bootstrap";
import LoginModal from "./components/Modal/LoginModal";
import LogOutModal from "./components/Modal/LogOutModal";
import { OpenLogOutModal } from "./actions/ModalAction";
import NewUserModal from "./components/Modal/NewUserModal";
import logo from "../images/logo.png";

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.openmodal = this.openmodal.bind(this);
    this.openmodalUser = this.openmodalUser.bind(this);
    this.openLogOutModal = this.openLogOutModal.bind(this);
    this.state = {
      addModalShow: false,
      LogOutModalShow: false,
      addModalShowUser: false,
      isAuth: false,
      test: false,
    };
  }

  static getDerivedStateFromProps(nextProps, state) {
    if (state.isAuth !== nextProps.isAuth) {
      return { isAuth: nextProps.isAuth };
    }
    // Return null to indicate no change to state.
    return null;
  }

  openmodal(test) {
    this.setState({ addModalShow: test });
  }
  openmodalUser(test) {
    this.setState({ addModalShowUser: test });
  }

  setStateFunction(state, test) {
    const newState = { ...state, LogOutModalShow: test };
    //const newState = { LogOutModalShow: test };
    console.warn("NewState i funksjonen " + JSON.stringify(newState));
    return newState;
  }

  openLogOutModal(test) {
    // this.setState(this.setStateFunction(this.state.LogOutModalShow, test));
    this.setState({ LogOutModalShow: test });
    console.warn(
      "Warn fra  openLogOutModal Først test " +
        test +
        " så  State av LogOutModalShow " +
        this.state.LogOutModalShow
    );
  }

  render() {
    let addModalClose = () => this.setState({ addModalShow: false });
    let LogOutModalClose = () => this.setState({ LogOutModalShow: false });
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
              {this.state.isAuth ? (
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={this.props.OpenLogOutModal}
                    /* this.setState({
                        LogOutModalShow: true,
                      })*/

                    href="#"
                  >
                    <LogOutModal
                      // show={this.state.LogOutModalShow}
                      // onHide={LogOutModalClose}
                      openLogOutModal={this.openLogOutModal}
                    />
                    Logg ut
                  </a>
                </li>
              ) : (
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => this.setState({ addModalShow: true })}
                    href="#"
                  >
                    <LoginModal
                      show={this.state.addModalShow}
                      //onHide={addModalClose}
                      openmodal={this.openmodal}
                    />
                    Login
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

NavigationBar.propTypes = {
  isAuth: PropTypes.bool,
  OpenLogOutModal: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    isAuth: state.UserReducer.isAuth,
  };
}
export default connect(mapStateToProps, { OpenLogOutModal })(NavigationBar);
