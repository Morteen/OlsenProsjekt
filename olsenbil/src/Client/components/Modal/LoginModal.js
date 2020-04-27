import React, { Component } from "react";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import isValidalidInputLogin from "../../../server/shared/Login";
import TextFieldGroup from "../commen/TextFieldGroup";
import { ToastContainer, toast } from "react-toastify";

import { userLoginReq } from "../../actions/LoginActions";
import { fetchMineTimer } from "../../actions/TimelisteAction";
import { UserIsAuthenticated } from "../../actions/UserActions";

import { Modal, Button, Row, Col, Form } from "react-bootstrap";

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      hidden: true,
      errors: {},
      isLoading: false,
      addModalShow: "",
      test: false,
      accessCredentials: { error: "" },
      errorForm: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.onResponse = this.onResponse.bind(this);
  }
  componentDidMount() {
    this.setState({
      accessCredentials: this.props.accessCredentials,
    });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      addModalShow: nextProps.addModalShow,
      accessCredentials: nextProps.accessCredentials,
    });
    if (nextProps.accessCredentials !== this.state.accessCredentials) {
      this.onResponse(this.state.addModalShow, nextProps.accessCredentials);
      //console.warn("Will update: " + nextProps.accessCredentials);
    }
  }

  /////
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  isValid() {
    const { errors, isValid } = isValidalidInputLogin(this.state);

    if (!isValid) {
      this.setState({ errors, isValid });
    }
    return isValid;
  }

  clearInput() {
    this.setState({
      username: "",
      password: "",
      hidden: true,
      errors: {},
      isLoading: false,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.isValid()) {
      const userCredential = {
        userName: this.state.username,
        password: this.state.password,
      };

      this.props.userLoginReq(userCredential);
    }
  }

  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }
  toggleModal() {
    this.handleSave(this.state.test);
  }

  handleSave(test) {
    this.props.openmodal(test);
  }

  onResponse(test, accessCredentials) {
    if (accessCredentials.error === 401) {
      this.setState({ errorForm: "Access denied 401" });
      toast.error("Access denied 401");
      this.setState({ isLoading: false }); //Setter Login knappen til true ved response fra databasen
    } else if (accessCredentials.error === 500) {
      this.setState({ errorForm: "Server error 500" });
      toast.error("Server Error 500");
    } else if (accessCredentials.error === "") {
      alert("Noe er galt");
    } else {
      toast.success("Du er logget inn !");
      this.props.fetchMineTimer(accessCredentials.access_token); //Henter timer fra timeliste objectet
      this.props.UserIsAuthenticated(); //Endrer userstatus til logget inn
    }

    this.setState({ isLoading: false }); //Setter Login knappen til true ved response fra databasen
    this.clearInput(); //Tømmer tekstfelt i modalen
    this.handleSave(test); //Lukker Login modalen
  }

  render() {
    const { errors } = this.state;
    const { formError } = this.state.errorForm;
    const { userLoginReq, accessCredentials } = this.props.accessCredentials;

    const { show, onHide } = this.props;
    return (
      <div>
        <Modal
          show={show}
          size="sm"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header
            closeButton
            onClick={this.toggleModal}
            className="LoginModal"
          >
            <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
          </Modal.Header>
          <Modal.Body className="LoginModal">
            <form onSubmit={this.onSubmit}>
              {formError && (
                <div className="alert alert-danger">{formError}</div>
              )}
              <TextFieldGroup
                type="Text"
                field="username"
                value={this.state.username}
                label="Brukernavn"
                error={errors.username}
                placeholder="Telefonnummer"
                onChange={this.onChange}
                className="form-control form-control-sm"
              />
              <ul id="loginList">
                <li>
                  <TextFieldGroup
                    type={this.state.hidden ? "password" : "text"}
                    field="password"
                    value={this.state.password}
                    label="Passord"
                    error={errors.password}
                    placeholder="Passord"
                    onChange={this.onChange}
                  />
                </li>
                <li>
                  <a href="#" onClick={this.toggleShow}>
                    Vis passord
                  </a>
                </li>
              </ul>
              <div id="LoginBtn" className="form-group">
                <button
                  disabled={this.state.isLoading}
                  className="btn btn-primary btn-lg"
                >
                  Login
                </button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
        <ToastContainer position={toast.POSITION.TOP_CENTER} autoClose={2500} />
      </div>
    );
  }
}

LoginModal.propTypes = {
  userLoginReq: PropTypes.func,
  fetchMineTimer: PropTypes.func,
  UserIsAuthenticated: PropTypes.func,
  accessCredentials: PropTypes.object,
};

const mapStateToprops = (state) => ({
  accessCredentials: state.loginReducer.accessCredentials,
});

export default connect(mapStateToprops, {
  userLoginReq,
  fetchMineTimer,
  UserIsAuthenticated,
})(LoginModal);
