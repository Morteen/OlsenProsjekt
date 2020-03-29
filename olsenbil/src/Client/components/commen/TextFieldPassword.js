import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

class TextFieldPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      field: "",
      type: "input-group-text",
      value: "",
      label: "",
      error: "",
      placeholder: "",
      onChange: "",
      className: "form-control",
      hidden: true
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      field: nextProps.field,
      value: nextProps.value,
      label: nextProps.label,
      error: nextProps.error,
      placeholder: nextProps.placeholder,
      onChange: nextProps.onChange,
      error: nextProps.error
    });
  }

  render() {
    return (
      <div
        className={classnames("input-group-append control-label form-group", {
          "has-error": this.state.error
        })}
      >
        <label className="control-label">{this.state.label}</label>
        <input
          placeholder={this.state.placeholder}
          type={this.state.hidden ? "password" : "text"} //feks'Text'
          value={this.state.value} //this.state.username
          onChange={this.state.onChange} //this.state.onChange
          name={this.state.field} //dette er name
          className={this.stateclassName}
        />
        <div
          onClick={() => {
            this.setState({ hidden: !this.state.hidden });
          }}
        >
          {" "}
          Vis passord
        </div>
        {this.state.error && (
          <span id="formVarning" className="help-block">
            {this.state.error}
          </span>
        )}
      </div>
    );
  }
}

TextFieldPassword.propTypes = {
  field: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  hidden: PropTypes.bool,
  placeholder: PropTypes.string,
  // onChange: PropTypes.func,
  type: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string
};
export default TextFieldPassword;

/*import PropTypes from "prop-types";
import classnames from "classnames";
import React from "react";

const TextFieldPassword = ({
  field,
  type = "input-group-text",
  value,
  label,
  error,
  placeholder,
  onChange,
  className = "form-control",
  hidden = false
}) => {
  return (
    <div
      className={classnames("input-group-append control-label form-group", {
        "has-error": error
      })}
    >
      <label className="control-label">{label}</label>
      <input
        placeholder={placeholder}
        type={hidden ? "password" : "text"} //feks'Text'
        value={value} //this.state.username
        onChange={onChange} //this.state.onChange
        name={field} //dette er name
        className={className}
        onClick={() => {
          hidden = true;
          return hidden;
        }}
      />
      <div
        onClick={() => {
          hidden = false;
          return hidden;
        }}
      >
        {" "}
        Vis passord
      </div>
      {error && (
        <span id="formVarning" className="help-block">
          {error}
        </span>
      )}
    </div>
  );
};

TextFieldPassword.propTypes = {
  field: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  hidden: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string
};

export default TextFieldPassword;
*/
