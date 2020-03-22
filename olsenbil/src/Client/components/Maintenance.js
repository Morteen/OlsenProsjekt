import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextFieldGroup from "./commen/TextFieldGroup";
import TextAreaGroup from "./commen/TextAreaGroup";
import isValidalidInputRegMaintenance from "../../server/shared/validations/RegMaintenanceValidations";
import { RegNewMaintenance } from "../actions/MaintenanceActions";

class Maintenance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regNumber: "",
      date: "",
      km: "",
      Description: "",
      price: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  isValid() {
    const { errors, isValid } = isValidalidInputRegMaintenance(this.state);

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
      regNumber: "",
      date: "",
      km: "",
      Description: "",
      price: "",
      errors: {}
    });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      const maintenance = {
        date: this.state.date,
        Description: this.state.Description,
        regNumber: this.state.regNumber,
        km: this.state.km,
        price: this.state.price
      };
      this.props.RegNewMaintenance(maintenance);
      this.clearInput();
    }
  }

  render() {
    return (
      <div>
        <h3> Registerer vedlikehold her</h3>
        <form onSubmit={this.onSubmit}>
          <TextFieldGroup
            type="Text"
            field="regNumber"
            value={this.state.regNumber}
            label="Registeringsnummer"
            error={this.state.errors.regNumber}
            placeholder="Reg nummer"
            onChange={this.onChange}
          />
          <TextFieldGroup
            type="date"
            field="date"
            value={this.state.date}
            label="Dato for reperasjon"
            error={this.state.errors.date}
            placeholder="Dato"
            onChange={this.onChange}
          />

          <TextFieldGroup
            type="number"
            field="km"
            value={this.state.km}
            label="Kilometer stand"
            error={this.state.errors.km}
            placeholder="Kilometer"
            onChange={this.onChange}
          />

          <TextAreaGroup
            field="Description"
            value={this.state.Description}
            label="Beskrivelse"
            error={this.state.errors.Description}
            placeholder="Beskrivelse"
            onChange={this.onChange}
          />
          <TextFieldGroup
            type="number"
            field="price"
            value={this.state.price}
            label="Pris for vedlikehold"
            error={this.state.errors.price}
            placeholder="Pris"
            onChange={this.onChange}
          />

          <div className="form-group">
            <button className="btn btn-primary btn-lg">
              Registere vedlikehold
            </button>
          </div>
        </form>
      </div>
    );
  }
}
Maintenance.propType = {
  RegNewMaintenance: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  //Timer: state.Timelistereducer.Timer
});
export default connect(null, { RegNewMaintenance })(Maintenance);
