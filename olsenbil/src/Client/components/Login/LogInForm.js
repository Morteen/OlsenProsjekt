import React, { Component } from "react";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import isValidalidInputLogin from "../../../server/shared/Login";
import TextFieldGroup from "../commen/TextFieldGroup";
import { userLoginReq } from "../../actions/LoginActions";

class LogInForm extends Component {
  componentWillUpdate(nextProps) {
    console.log("Nextprops log " + JSON.stringify(nextProps));
    if (nextProps.accessCredentials) {
      console.log("Hurra");
    }
  }

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
      this.props
        .userLoginReq(userCredential)

        .then(
          data =>
            console.log(
              "Dette er fra regform:" +
                JSON.stringify(data.payload.access_token)
            ),
          data => localStorage.setItem("token", data.payload.access_token),
          data => localStorage.setItem("expires_in", data.payload.expires_in),
          data =>
            localStorage.setItem("refresh_token", data.payload.refresh_token)
        );
      this.clearInput();
    }
  }
  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }

  /////

  render() {
    const { errors } = this.state;
    const { userLoginReq, accessCredentials } = this.props;
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
          className="form-control form-control-sm"
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
LogInForm.propTypes = {
  userLoginReq: PropTypes.func,
  accessCredentials: PropTypes.object
};
const mapStateToprops = state => ({
  accessCredentials: state.accessCredentials
});

export default connect(mapStateToprops, { userLoginReq })(LogInForm);

/**res=>{
                let errors = this.state.errors;
               let  invalid;
                console.log(res.data.results.length)
                if(res.data.results.length>=1){
                
                    errors[field]="Dette brukernavnet er opptatt "
                    invalid=true
                }else if(res.data.results.length===0){ 
                    errors[field]="";
                    invalid=false;
                }
                this.setState({errors,invalid})
                console.log("Errors i checkuser",errors) */
