import React, { Component } from "react";
import TextFieldGroup from "../commen/TextFieldGroup";

class RegTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    return (
      <div>
        <h3> Registerer dine timer her</h3>
        <form onSubmit={this.onSubmit}>
          <TextFieldGroup
            type="Text"
            field="km"
            value={this.state.km}
            label="Kilometer"
            error={errors.km}
            placeholder="Kilometer"
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
}
export default RegTimer;
