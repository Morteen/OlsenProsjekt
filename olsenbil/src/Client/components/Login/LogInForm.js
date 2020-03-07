import React, { Component, isValidElement } from "react";
import isValidalidInputLogin from "../../../server/shared/Login";
import TextFieldGroup from "../commen/TextFieldGroup";

class LogInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      hidden: true,
      errors: {},
      isLoading: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }
  componentDidMount() {
    console.log("componentDidMount virker");
  }

  /////
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  isValid() {
    const { errors, isValid } = isValidalidInputLogin(this.state);
    console.log("IsValid fra isValid funks:", isValid);
    if (!isValid) {
      this.setState({ errors, isValid });
      console.log(
        "Log fra etter setState:",
        errors.username + " isValid" + isValid
      );
    }
    return isValid;
  }
  onSubmit(e) {
    e.preventDefault();
    //this.setState({ errors: {}, isLoading: true });
    if (this.isValid()) {
      var md5 = require("md5");
      const userCredential = {
        userName: this.state.username,
        password: md5(this.state.password)
      };
      this.setState({ isLoading: false }); //her skal man vent på server reponse
      this.props.userLoginReq(userCredential);
      //console.log("login knappen svarer med " + userCredential);
    }
  }
  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }

  /////

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h2>Login</h2>

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
          type={this.state.hidden ? "password" : "text"}
          field="password"
          value={this.state.password}
          label="Passord"
          error={errors.password}
          placeholder="Passord"
          onChange={this.onChange}
        />
        <div className="input-group-append">
          <span className="input-group-text" id="basic-addon2">
            <div onClick={this.toggleShow}>Vis passord</div>
          </span>
        </div>

        <div className="form-group">
          <button
            disabled={this.state.isLoading}
            className="btn btn-primary btn-lg"
          >
            Login
          </button>
        </div>
      </form>
    );
  }
}
export default LogInForm;
