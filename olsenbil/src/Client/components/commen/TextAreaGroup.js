import PropTypes from "prop-types";
import classnames from "classnames";
import React from "react";

const TextAreaGroup = ({
  field,
  value,
  label,
  error,
  placeholder,
  onChange
}) => {
  return (
    <div className={classnames("form-group", { "has-error": error })}>
      <label className="control-label">{label}</label>
      <textarea
        placeholder={placeholder}
        value={value} //this.state.description
        onChange={onChange} //this.state.onChange
        name={field} //dette er name
        className="form-control"
      />
      {error && (
        <span id="formVarning" className="help-block">
          {error}
        </span>
      )}
    </div>
  );
};

TextAreaGroup.propTypes = {
  field: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string
};

export default TextAreaGroup;
