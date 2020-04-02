import React, { Component } from "react";
import PropTypes from "prop-types";
import TextFieldGroup from "../commen/TextFieldGroup";
import TextAreaGroup from "../commen/TextAreaGroup";

class TimerModal extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      index: "",
      date: "",
      fromTime: "",
      toTime: "",
      description: "",
      ordinaryHours: "",
      fiftyProcentHours: "",
      hundredProcentHours: "8",
      tripDays: 0,
      bankedTime: "",
      timeOffInLieu: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      index: nextProps.index,
      date: nextProps.date,
      fromTime: nextProps.fromTime,
      toTime: nextProps.toTime,
      description: nextProps.description,
      ordinaryHours: nextProps.ordinaryHours,
      fiftyProcentHours: nextProps.fiftyProcentHours,
      hundredProcentHours: nextProps.hundredProcentHours,
      tripDays: nextProps.tripDays,
      bankedTime: nextProps.bankedTime,
      timeOffInLieu: nextProps.timeOffInLieu
    });
  }

  mobileHandler(e) {
    this.setState({ mobile: e.target.value });
  }
  dateHandler(e) {
    this.setState({ date: e.target.value });
  }

  fromTimeDepartureHandler(e) {
    this.setState({ fromTime: e.target.value });
  }

  toTimeHandler(e) {
    this.setState({ toTime: e.target.value });
  }
  DescriptionHandler(e) {
    this.setState({ description: e.target.value });
  }
  ordinaryHoursHandler(e) {
    this.setState({ ordinaryHours: e.target.value });
  }
  fiftyProcentHoursHandler(e) {
    this.setState({ fiftyProcentHours: e.target.value });
  }
  hundredProcentHoursHandler(e) {
    this.setState({ hundredProcentHours: e.target.value });
  }
  tripDaysHandler(e) {
    this.setState({ tripDays: e.target.value });
  }
  bankedTimeHandler(e) {
    this.setState({ bankedTime: e.target.value });
  }
  timeOffInLieuHandler(e) {
    this.setState({ timeOffInLieu: e.target.value });
  }

  handleSave() {
    const item = this.state;
    this.props.saveModalDetails(item);
  }

  render() {
    return (
      <div
        className="modal fade"
        id="timerModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="timerModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="timerModalLabel">
                Rediger opplysninger
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <TextFieldGroup
                type="Date"
                field="date"
                value={this.state.date}
                label="Dato"
                error={this.state.errors.date}
                placeholder="Dato"
                onChange={e => this.dateHandler(e)}
              />

              <TextFieldGroup
                type="Time"
                field="fromTime"
                value={this.state.fromTime}
                label="Avreise tidspunkt"
                error={this.state.errors.timeDeparture}
                placeholder="Avreise tid"
                onChange={e => this.fromTimeHandler(e)}
                min="00:00"
                max="23:59"
              />

              <TextFieldGroup
                type="Text"
                field="toTime"
                value={this.state.toTime}
                label="Hjemkomst"
                error={this.state.errors.timeArrival}
                placeholder="Tidspunkt for hjemkomst"
                onChange={e => this.toTimeHandler(e)}
              />

              <TextFieldGroup
                type="number"
                field="ordinaryHours"
                value={this.state.ordinaryHours}
                label="Ordinære timer"
                error={this.state.errors.HourCount}
                placeholder="Antall timer forbrukt"
                onChange={e => this.ordinaryHoursHandler(e)}
              />

              <TextFieldGroup
                type="number"
                field="fiftyProcentHours"
                value={this.state.fiftyProcentHours}
                label="50 % overtid"
                // error={this.state.errors.outlayPayment}
                placeholder="overtid"
                onChange={e => this.fiftyProcentHoursHandler(e)}
              />

              <TextFieldGroup
                type="number"
                field="hundredProcentHours"
                value={this.state.hundredProcentHours}
                label="100% overtid"
                // error={this.state.errors.hundredProcentHours}
                placeholder="Overtid"
                onChange={e => this.hundredProcentHoursHandler(e)}
              />
              <TextFieldGroup
                type="number"
                field="tripDays"
                value={this.state.tripDays}
                label="Antall døgn på tur"
                error={this.state.errors.tripDays}
                placeholder="Dager"
                onChange={e => this.tripDaysHandler(e)}
              />

              <TextFieldGroup
                type="number"
                field="bankedTime"
                value={this.state.bankedTime}
                label="bankedTime"
                // error={this.state.errors.bankedTime}
                placeholder="bankedTime"
                onChange={e => this.bankedTimeHandler(e)}
              />

              <TextFieldGroup
                type="number"
                field="timeOffInLieu"
                value={this.state.timeOffInLieu}
                label="bankedTime"
                // error={this.state.errors.timeOffInLieu}
                placeholder="timeOffInLieu"
                onChange={e => this.timeOffInLieuHandler(e)}
              />

              <TextAreaGroup
                field="description"
                value={this.state.description}
                label="Beskrivelse"
                error={this.state.errors.description}
                placeholder="Beskrivelse"
                onChange={e => this.DescriptionHandler(e)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Lukk
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={() => {
                  this.handleSave();
                }}
              >
                lagre
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
TimerModal.propTypes = {};
export default TimerModal;
/* mobile: 40042106,
      date: "2020-02-02T00:00:00",
      fromTime: "23:30:00",
      toTime: "08:30:00",
      description: "Valestrand marina. Storfjord",
      ordinaryHours: "0",
      fiftyProcentHours: "0",
      hundredProcentHours: "8",
      tripDays: 0,
      bankedTime: "",
      timeOffInLieu: "",
      registeredTime: "2020-02-04T00:35:59.17"*/
