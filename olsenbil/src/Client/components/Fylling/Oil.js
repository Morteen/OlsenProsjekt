import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextFieldGroup from "../commen/TextFieldGroup";
import { RegOilFill, fetchMyStats } from "../../actions/FyllingActions";
import isValidalidInputOil from "../../../server/shared/validations/Oil";
class Oil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regNumber: "",
      km: "",
      Oilcost: "",
      sumLiterOil: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  isValid() {
    const { errors, isValid } = isValidalidInputOil(this.state);

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
      const oilFill = {
        regNumber: this.state.regNumber,
        km: this.state.km,
        Oilcost: this.state.Oilcost,
        sumLiterOil: this.state.sumLiterOil
      };
      this.props.RegOilFill(oilFill);
      this.props.fetchMyStats();
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="row">
        <div className="col-md-4 col-med-offset-4">
          <form onSubmit={this.onSubmit}>
            <h3>Olje</h3>

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
              field="sumLiterOil"
              value={this.state.sumLiterOil}
              label="Antall liter"
              error={errors.sumLiterOil}
              placeholder="Antall liter"
              onChange={this.onChange}
            />

            <TextFieldGroup
              type="number"
              field="Oilcost"
              value={this.state.Oilcost}
              label="Totalt betalt"
              error={errors.Oilcost}
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

Oil.propTypes = {
  RegOilFill: PropTypes.func,
  fetchMyStats: PropTypes.func,
  OilFilling: PropTypes.array
};
const mapStateToprops = state => ({
  OilFilling: state.OilFilling
});

export default connect(mapStateToprops, { RegOilFill, fetchMyStats })(Oil);
