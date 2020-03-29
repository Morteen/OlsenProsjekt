import React, { Component } from "react";
import TextFieldPassword from "../components/commen/TextFieldPassword";
import isValidalidInputLogin from "../../server/shared/Login";

export default class DevelopSite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      hidden: true,
      errors: {},
      isLoading: false,
      addModalShow: "",
      test: false
    };

    this.onChange = this.onChange.bind(this);
  }
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

  render() {
    const { errors } = this.state;
    return (
      <TextFieldPassword
        field="password"
        value={this.state.password}
        label="Passord"
        error={errors.password}
        placeholder="Passord"
        onChange={this.onChange}
      />
    );
  }
}

/**
 *   placeholder={placeholder}
          type={type} //feks'Text'
          value={value} //this.state.username
          onChange={onChange} //this.state.onChange
          name={field} //dette er name
          className={className}
 *  {error && (
          <span id="formVarning" className="help-block">
            {error}
          </span>
        )} */
