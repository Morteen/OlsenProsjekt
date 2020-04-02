import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextFieldGroup from "../commen/TextFieldGroup";
import TextAreaGroup from "../commen/TextAreaGroup";
import isValidalidInputRegTimer from "../../../server/shared/validations/RegTimerValidation";

import { RegNyeTimer } from "../../actions/TimelisteAction";
import { fetchMineTimer } from "../../actions/TimelisteAction";
class RegTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      date: "",
      timeDeparture: "",
      timeArrival: "",
      Description: "",
      HourCount: "",
      outlayPayment: "",

      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.props.fetchMineTimer();
    console.log("Log av fetchMinetimer på RegTimer siden:" + this.props.Timer);
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

  clearInput() {
    this.setState({
      mobile: "",
      date: "",
      fromTime: "",
      toTime: "",
      description: "",
      ordinaryHours: "",
      fiftyProcentHours: "",
      hundredProcentHour: "",
      tripDays: "",
      bankedTime: "",
      timeOffInLieu: "",
      registeredTime: "",

      errors: {}
    });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      const newRegTime = {
        mobile: 40042106,
        date: this.state.date,
        description: this.state.description,
        fromTime: this.state.fromTime,
        toTime: this.state.toTimel,
        fiftyProcentHours: this.state.fiftyProcentHours,
        ordinaryHours: this.state.ordinaryHours,
        hundredProcentHours: this.state.hundredProcentHours,
        tripDays: this.state.tripDays,
        bankedTime: this.state.bankedTime,
        timeOffInLieu: this.state.timeOffInLieu,
        registeredTime: ""
      };
      this.props.RegNyeTimer(newRegTime);
      this.clearInput();
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
            field="fromTime"
            value={this.state.fromTime}
            label="Avreise tidspunkt"
            error={this.state.errors.fromTime}
            placeholder="Avreise tid"
            onChange={this.onChange}
            min="00:00"
            max="23:59"
          />

          <TextFieldGroup
            type="Time"
            field="toTime"
            value={this.state.toTime}
            label="Hjemkomst"
            error={this.state.errors.toTime}
            placeholder="Tidspunkt for hjemkomst"
            onChange={this.onChange}
            min="00:00"
            max="23:59"
          />
          <TextFieldGroup
            type="number"
            field="ordinaryHours"
            value={this.state.ordinaryHours}
            label="Ordinære timer"
            error={this.state.errors.ordinaryHours}
            placeholder="Timer"
            onChange={this.onChange}
          />
          <TextFieldGroup
            type="number"
            field="fiftyProcentHours"
            // value={this.state.fiftyProcentHours}
            label="50% overtid"
            error={this.state.errors.fiftyProcentHours}
            placeholder="Overtid"
            onChange={this.onChange}
          />

          <TextFieldGroup
            type="number"
            field="hundredProcentHours"
            value={this.state.hundredProcentHours}
            label="100% overtid"
            // error={this.state.errors.hundredProcentHours}
            placeholder="Overtid"
            onChange={this.onChange}
          />
          <TextFieldGroup
            type="number"
            field="tripDays"
            value={this.state.tripDays}
            label="Antall døgn på tur"
            error={this.state.errors.tripDays}
            placeholder="Dager"
            onChange={this.onChange}
          />

          <TextFieldGroup
            type="number"
            field="bankedTime"
            value={this.state.bankedTime}
            label="bankedTime"
            // error={this.state.errors.bankedTime}
            placeholder="bankedTime"
            onChange={this.onChange}
          />

          <TextFieldGroup
            type="number"
            field="timeOffInLieu"
            value={this.state.timeOffInLieu}
            label="timeOffInLieu"
            // error={this.state.errors.timeOffInLieu}
            placeholder="timeOffInLieu"
            onChange={this.onChange}
          />

          <TextAreaGroup
            field="description"
            value={this.state.description}
            label="Beskrivelse"
            error={this.state.errors.description}
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
RegTimer.propType = {
  RegNyeTimer: PropTypes.func.isRequired,
  fetchMineTimer: PropTypes.func.isRequired,
  Timer: PropTypes.array
};
const mapStateToProps = state => ({
  Timer: state.Timelistereducer.Timer
});
export default connect(mapStateToProps, { RegNyeTimer, fetchMineTimer })(
  RegTimer
);
