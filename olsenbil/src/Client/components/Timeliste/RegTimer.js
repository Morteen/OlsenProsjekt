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
      id: "",
      date: "",
      timeDeparture: "",
      timeArrival: "",
      Description: "",
      HourCount: "",
      outlayPayment: "",

      errors: {}
    });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      const newRegTime = {
        id: this.props.Timer.length,
        date: this.state.date,
        Description: this.state.Description,
        timeDeparture: this.state.timeDeparture,
        timeArrival: this.state.timeArrival,
        HourCount: this.state.HourCount,
        outlayPayment: this.state.outlayPayment
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
            field="timeDeparture"
            value={this.state.timeDeparture}
            label="Avreise tidspunkt"
            error={this.state.errors.timeDeparture}
            placeholder="Avreise tid"
            onChange={this.onChange}
            min="00:00"
            max="23:59"
          />

          <TextFieldGroup
            type="Time"
            field="timeArrival"
            value={this.state.timeArrival}
            label="Hjemkomst"
            error={this.state.errors.timeArrival}
            placeholder="Tidspunkt for hjemkomst"
            onChange={this.onChange}
            min="00:00"
            max="23:59"
          />
          <TextFieldGroup
            type="number"
            field="HourCount"
            value={this.state.HourCount}
            label="Timeforbruk"
            error={this.state.errors.HourCount}
            placeholder="Antall timer forbrukt"
            onChange={this.onChange}
          />
          <TextFieldGroup
            type="number"
            field="outlayPayment"
            value={this.state.outlayPayment}
            label="Mine utlegg"
            error={this.state.errors.outlayPayment}
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
