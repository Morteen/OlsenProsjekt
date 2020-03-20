import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextFieldGroup from "../commen/TextFieldGroup";
import { RegReFuling, fetchMyStats } from "../../actions/FyllingActions";

class Fuel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regNumber: "",
      km: "",
      totalPrice: "",
      sumLiterFuel: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const newRefuling = {
      regNumber: this.state.regNumber,
      km: this.state.km,
      totalPrice: this.state.totalPrice,
      sumLiterFuel: this.state.sumLiterFuel
    };
    console.log("Log av refuling object: " + newRefuling);
    this.props.RegReFuling(newRefuling);
    this.props.fetchMyStats();
    this.clearInput();
  }
  clearInput() {
    this.setState({
      regNumber: "",
      km: "",
      totalPrice: "",
      sumLiterFuel: "",
      errors: {}
    });
  }

  render() {
    const { errors } = this.state;
    return (
      <form className="myForm" onSubmit={this.onSubmit}>
        <h3>Drivstoff</h3>
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
          field="totalPrice"
          value={this.state.totalPrice}
          label="Totalpris"
          error={errors.totalPrice}
          placeholder="Pris"
          step="0.01"
          onChange={this.onChange}
        />
        <TextFieldGroup
          type="Number"
          field="sumLiterFuel"
          value={this.state.sumLiterFuel}
          label="Antall liter"
          error={errors.sumLiterFuel}
          placeholder="Antall liter"
          onChange={this.onChange}
        />

        <div className="form-group">
          <button className="btn btn-primary btn-lg">Register drivstoff</button>
        </div>
      </form>
    );
  }
}
Fuel.propTypes = {
  RegReFuling: PropTypes.func,
  fetchMyStats: PropTypes.func,
  myFulingRecords: PropTypes.array
};
const mapStateToprops = state => ({
  myFulingRecords: state.myFulingRecords
});

export default connect(mapStateToprops, { RegReFuling, fetchMyStats })(Fuel);
// disabled={this.state.isLoading}
