import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userSignupReq } from "../../actions/signupActions";
import isValidalidInputReguser from "../../../server/shared/validations/signup";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      regnumber: "",
      postalNumber: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  /////////////

  isValid() {
    const { errors, isValid } = isValidalidInputReguser(this.state);
    if (!this.isValid) {
      this.setState({ errors });
    }
    console.log("Log fra isValid funksjonen i reg user " + isValid);
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
    return (
      <form onSubmit={this.onSubmit}>
        <h3>Registrer deg her</h3>
        <div className="form-group">
          <label className="control-label">UserName</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.onChange}
            name="username"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="control-label">Passord</label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.onChange}
            name="password"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="control-label">Email</label>
          <input
            type="email"
            value={this.state.email}
            onChange={this.onChange}
            name="email"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="control-label">Reg Nummer</label>
          <input
            type="text"
            value={this.state.regnumber}
            onChange={this.onChange}
            name="regnumber"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="control-label">Postnummer</label>
          <input
            type="text"
            value={this.state.postalNumber}
            onChange={this.onChange}
            name="postalNumber"
            className="form-control"
          />
        </div>

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
