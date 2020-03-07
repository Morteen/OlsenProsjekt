import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userSignupReq } from "../../actions/signupActions";
import isValidalidInputReguser from "../../../server/shared/validations/signup";
import TextFieldGroup from "../commen/TextFieldGroup";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      regnumber: "",
      postalNumber: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  /////////////

  isValid() {
    const { errors, isValid } = isValidalidInputReguser(this.state);
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

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      const user = {
        userName: this.state.username,
        password: this.state.password,
        email: this.state.email,
        regnumber: this.state.regnumber,
        postalNumber: this.state.postalNumber
      };

      this.props.userSignupReq(user);
    }
  }

  ////////////
  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h3>Registrer deg her</h3>

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
    );
  }
}
SignupForm.propTypes = {
  userSignupReq: PropTypes.func
};
const mapStateToProps = state => ({
  user: state.user
});
export default connect(mapStateToProps, { userSignupReq })(SignupForm);
