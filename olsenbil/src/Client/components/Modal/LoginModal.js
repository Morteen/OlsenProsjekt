import React, { Component } from "react";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import isValidalidInputLogin from "../../../server/shared/Login";
import TextFieldGroup from "../commen/TextFieldGroup";
import { ToastContainer, toast } from "react-toastify";

import {
  userLoginReq,
  userLoginReq1,
  userLoginReq2
} from "../../actions/LoginActions";

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
      errorForm: ""
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
      accessCredentials: this.props.accessCredentials
    });
  }
  componentWillReceiveProps(nextProps) {
    //alert("Will update: " + JSON.stringify(nextProps.accessCredentials));
    this.setState({
      addModalShow: nextProps.addModalShow,
      accessCredentials: nextProps.accessCredentials
    });
    if (nextProps.accessCredentials !== this.state.accessCredentials) {
      this.onResponse(this.state.addModalShow, nextProps.accessCredentials);
      console.warn("Will update: " + nextProps.accessCredentials);
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
      console.log(
        "Log fra etter setState:",
        errors.username + " isValid" + isValid
      );
    }
    return isValid;
  }

  clearInput() {
    this.setState({
      username: "",
      password: "",
      hidden: true,
      errors: {},
      isLoading: false
    });
  }
  modalHandler() {
    this.setState({ addModalShow: false });
  }

  onSubmit(e) {
    e.preventDefault();
    //this.setState({ errors: {}, isLoading: true });
    if (this.isValid()) {
      const userCredential = {
        userName: this.state.username,
        password: this.state.password
      };

      this.props.userLoginReq1(userCredential);
      console.warn(
        "Logg av props på " + JSON.stringify(this.props.accessCredentials)
      );
      this.clearInput();
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
    console.warn(accessCredentials.error);
    this.setState({ isLoading: true }); //Setter Login knappen til true ved response fra databasen
    if (
      accessCredentials.error !== 401 ||
      accessCredentials.error !== 500 ||
      accessCredentials.error !== ""
    ) {
      this.handleSave(test);
      toast.success("Du er logget inn !");
      this.setState({ isLoading: false }); //Setter Login knappen til true ved response fra databasen
    } else if (accessCredentials.error === 401) {
      this.setState({ errorForm: "Access denied 401" });
      toast.danger("Access denied 401");
      alert("Access denied 401");
    } else if (accessCredentials.error === 500) {
      this.setState({ errorForm: "Server error 500" });
      alert("Server error 500");
    }
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
          <Modal.Header id="modalHeader" closeButton onClick={this.toggleModal}>
            <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
          </Modal.Header>
          <Modal.Body className="customModal">
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
        <ToastContainer position={toast.POSITION.TOP_CENTER} autoClose={1500} />
      </div>
    );
  }
}

LoginModal.propTypes = {
  userLoginReq: PropTypes.func,
  userLoginReq1: PropTypes.func,

  accessCredentials: PropTypes.object
};

LoginModal.contextType = {
  router: PropTypes.object
};

const mapStateToprops = state => ({
  accessCredentials: state.loginReducer.accessCredentials
});

export default connect(mapStateToprops, {
  userLoginReq,
  userLoginReq1
})(LoginModal);
