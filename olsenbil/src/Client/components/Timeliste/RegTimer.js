import React, { Component } from "react";
import TextFieldGroup from "../commen/TextFieldGroup";
import TextAreaGroup from "../commen/TextAreaGroup";
import isValidalidInputRegTimer from "../../../server/shared/validations/RegTimerValidation";

class RegTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      Description: "",
      Departure: "",

      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  isValid() {
    const { errors, isValid } = isValidalidInputRegTimer(this.state);

    if (!isValid) {
      this.setState({ errors, isValid });
      console.log(
        "Log fra etter setState:",
        errors.username + " isValid" + isValid
      );
    }
    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      alert("Regtimer og valideringe virker knappen virker !!");
    }
  }

  render() {
    return (
      <div>
        <h3> Registerer dine timer her</h3>
        <form onSubmit={this.onSubmit}>
          <TextFieldGroup
            type="Date"
            field="date"
            value={this.state.date}
            label="Dato"
            error={this.state.errors.date}
            placeholder="Dato"
            onChange={this.onChange}
          />
          <TextFieldGroup
            type="Time"
            field="Departure"
            value={this.state.Departure}
            label="Avreise tidspunkt"
            error={this.state.errors.Departure}
            placeholder="Avreise tid"
            onChange={this.onChange}
            min="00:00"
            max="23:59"
          />

          <TextFieldGroup
            type="Time"
            field="Arrival"
            value={this.state.Arrival}
            label="Hjemkomst"
            error={this.state.errors.Arrival}
            placeholder="Tidspunkt for hjemkomst"
            onChange={this.onChange}
            min="00:00"
            max="23:59"
          />
          <TextFieldGroup
            type="number"
            field="sumHour"
            value={this.state.sumHour}
            label="Timeforbruk"
            error={this.state.errors.sumHour}
            placeholder="Antall timer forbrukt"
            onChange={this.onChange}
          />
          <TextFieldGroup
            type="number"
            field="sumPayment"
            value={this.state.sumPayment}
            label="Mine utlegg"
            error={this.state.errors.sumPayment}
            placeholder="Sum av utlegg"
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

          <div className="form-group">
            <button className="btn btn-primary btn-lg">Registere timer</button>
          </div>
        </form>
      </div>
    );
  }
}
export default RegTimer;

/* <form onSubmit={this.onSubmit}>
          <TextFieldGroup
            type="Text"
            field="km"
            value={this.state.km}
            label="Kilometer"
            error={errors.km}
            placeholder="Kilometer"
            onChange={this.onChange}
          />
        </form>'*/
