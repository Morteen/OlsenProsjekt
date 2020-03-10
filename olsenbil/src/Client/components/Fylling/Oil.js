import React, { Component } from "react";
import TextFieldGroup from "../commen/TextFieldGroup";
class Oil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      km: "",
      sumLiterOil: "",
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
        <h3>Olje</h3>
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
          field="sumLiter"
          value={this.state.sumLiterOil}
          label="Antall liter"
          error={errors.sumLiterOil}
          placeholder="Antall liter"
          onChange={this.onChange}
        />

        <div className="form-group">
          <button className="btn btn-primary btn-lg">Register Olje</button>
        </div>
      </form>
    );
  }
}

export default Oil;
