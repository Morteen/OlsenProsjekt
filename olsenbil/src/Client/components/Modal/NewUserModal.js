import React, { Component } from "react";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import isValidalidInputLogin from "../../../server/shared/Login";
import TextFieldGroup from "../commen/TextFieldGroup";
import { userSignupReq } from "../../actions/signupActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Modal, Button, Row, Col, Form } from "react-bootstrap";

class NewUserModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      regnumber: "",
      postalNumber: "",
      errors: {},
      isLoading: false,
      addModalShow: "",
      test: false,
      showToast: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      addModalShow: nextProps.addModalShowUser
    });
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
    alert(this.props.addModalShow);
  }

  onSubmit(e) {
    e.preventDefault();
    //this.setState({ errors: {}, isLoading: true });
    if (this.isValid()) {
      const user = {
        userName: this.state.username,
        password: this.state.password,
        email: this.state.email,
        regnumber: this.state.regnumber,
        postalNumber: this.state.postalNumber
      };

      this.props.userSignupReq(user);

      this.clearInput();

      //Åpner toasten

      this.handleSave(this.state.test);
    }
    toast.success("Du er registret !");
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

  render() {
    const { errors } = this.state;
    const { userLoginReq, accessCredentials } = this.props;
    console.log(JSON.stringify(this.props));
    const { show, onHide } = this.props;
    return (
      <div>
        <Modal
          show={show}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header
            id="modalHeaderUser"
            closeButton
            onClick={this.toggleModal}
          >
            <Modal.Title id="contained-modal-title-vcenter">
              Registrer deg
            </Modal.Title>
          </Modal.Header>
          <Modal.Body id="customModalUser">
            <form onSubmit={this.onSubmit}>
              <TextFieldGroup
                type="Text"
                field="username"
                value={this.state.username}
                label="Brukernavn"
                error={errors.username}
                placeholder="Telefonnummer"
                onChange={this.onChange}
              />

              <TextFieldGroup
                type="password"
                field="password"
                value={this.state.password}
                label="Passord"
                error={errors.password}
                placeholder="Passord"
                onChange={this.onChange}
              />

              <TextFieldGroup
                type="email"
                field="email"
                value={this.state.email}
                label="Email"
                error={errors.email}
                placeholder="Email"
                onChange={this.onChange}
              />

              <TextFieldGroup
                type="text"
                field="regnumber"
                value={this.state.regnumber}
                label="Reg Nummer"
                error={errors.regnumber}
                placeholder=""
                onChange={this.onChange}
              />

              <TextFieldGroup
                type="text"
                field="postalNumber"
                value={this.state.postalNumber}
                label="Postnummer"
                error={errors.postalNumber}
                placeholder=""
                onChange={this.onChange}
              />

              <div className="form-group">
                <button className="btn btn-primary btn-lg">Register</button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
        <ToastContainer position={toast.POSITION.TOP_CENTER} autoClose={1500} />
        />
      </div>
    );
  }
}

NewUserModal.propTypes = {
  userSignupReq: PropTypes.func
};
const mapStateToprops = state => ({
  user: state.user
});

export default connect(mapStateToprops, { userSignupReq })(NewUserModal);
