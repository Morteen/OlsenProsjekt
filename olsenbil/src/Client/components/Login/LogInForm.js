import React, { Component, isValidElement } from "react";
import isValidalidInputLogin from "../../../server/shared/Login";

class LogInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      hidden: true
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
    if (!this.isValid) {
      this.setState({ errors });
    }
    console.log("Log fra isValid funksjonen " + isValid);
    return isValid;
  }
  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      var md5 = require("md5");
      const userCredential = {
        userName: this.state.username,
        password: md5(this.state.password)
      };

      this.props.userLoginReq(userCredential);
      //console.log("login knappen svarer med " + userCredential);
    }
  }
  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }

  /////

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label className="control-label">UserName</label>
          <input
            placeholder="Telefonnummer"
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
            placeholder="Passord"
            aria-label="Username"
            aria-describedby="basic-addon1"
            type={this.state.hidden ? "password" : "text"}
            value={this.state.password}
            onChange={this.onChange}
            name="password"
            className="form-control"
          />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              <div onClick={this.toggleShow}>Vis passord</div>
            </span>
          </div>
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg">Login</button>
        </div>
      </form>
    );
  }
}
export default LogInForm;
