import React, { Component } from "react";

export default class extends Component {
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
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const user = {
      userName: this.state.username,
      password: this.state.password,
      email: this.state.email,
      regnumber: this.state.regnumber,
      postalNumber: this.state.postalNumber
    };
    console.log(this.state);
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
