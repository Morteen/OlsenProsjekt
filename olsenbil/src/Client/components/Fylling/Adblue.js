import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextFieldGroup from "../commen/TextFieldGroup";
import isValidalidInputAdblue from "../../../server/shared/validations/RegAdblueValidation";
import { RegAdblueFill, fetchMyStats } from "../../actions/FyllingActions";
class Adblue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regNumber: "",
      km: "",
      AdblueCost: "",
      sumLiterAdblue: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  isValid() {
    const { errors, isValid } = isValidalidInputAdblue(this.state);

    if (!isValid) {
      this.setState({ errors, isValid });
      console.log(
        "Log fra etter setState:",
        errors.sumLiterAdblue + " isValid" + isValid
      );
    }
    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      const AdblueFill = {
        regNumber: this.state.regNumber,
        km: this.state.km,
        AdblueCost: this.state.AdblueCost,
        sumLiterAdblue: this.state.sumLiterAdblue
      };
      this.props.RegAdblueFill(AdblueFill);
      this.props.fetchMyStats();
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="row">
        <div className="col-md-4 col-med-offset-4">
          <form onSubmit={this.onSubmit}>
            <h3>Adblue</h3>

            <TextFieldGroup
              type="Text"
              field="regNumber"
              value={this.state.regNumber}
              label="Registreringsnummer"
              error={errors.regNumber}
              placeholder="Reg nummer"
              onChange={this.onChange}
            />

            <TextFieldGroup
              type="Text"
              field="km"
              value={this.state.km}
              label="Kilometer"
              error={errors.km}
              placeholder="Kilometer"
              onChange={this.onChange}
            />

            <TextFieldGroup
              type="number"
              field="sumLiterAdblue"
              value={this.state.sumLiterAdblue}
              label="Antall liter Adblue"
              error={errors.sumLiterAdblue}
              placeholder="Antall liter Adblue"
              onChange={this.onChange}
            />

            <TextFieldGroup
              type="number"
              field="AdblueCost"
              value={this.state.AdblueCost}
              label="Totalt betalt"
              error={errors.AdblueCost}
              placeholder="Total betalt"
              onChange={this.onChange}
            />

            <div className="form-group">
              <button className="btn btn-primary btn-lg">
                Register Olje fylling
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Adblue.propTypes = {
  RegAdblueFill: PropTypes.func,
  fetchMyStats: PropTypes.func,
  AdblueFilling: PropTypes.array
};
const mapStateToprops = state => ({
  AdblueFilling: state.AdblueFilling
});

export default connect(mapStateToprops, { RegAdblueFill, fetchMyStats })(
  Adblue
);
