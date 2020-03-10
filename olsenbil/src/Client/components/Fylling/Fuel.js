import React, { Component } from "react";
import TextFieldGroup from "../commen/TextFieldGroup";

export default class Fuel extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    alert("Submit virker !!");
  }

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
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
          type="text"
          field="totalPrice"
          value={this.state.totalPrice}
          label="Totalpris"
          error={errors.totalPrice}
          placeholder="Pris"
          onChange={this.onChange}
        />
        <TextFieldGroup
          type="text"
          field="sumLiter"
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
// disabled={this.state.isLoading}
