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
      fiftyProcentHours: 0,
      errors: {}
    };
  }

  /* mobile={modalData.mobile}
          date={modalData.date}
          fromTime={modalData.fromTime}
          toTime={modalData.toTime}
          description={modalData.description}
          ordinaryHours={modalData.ordinaryHours}
          fiftyProcentHours={modalData.fiftyProcentHours}*/

  componentWillReceiveProps(nextProps) {
    this.setState({
      index: nextProps.index,
      date: nextProps.date,
      fromTime: nextProps.fromTime,
      toTime: nextProps.toTime,
      description: nextProps.description,
      ordinaryHours: nextProps.ordinaryHours,
      fiftyProcentHours: nextProps.fiftyProcentHours
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
                error={this.state.errors.outlayPayment}
                placeholder="overtid"
                onChange={e => this.fiftyProcentHoursHandler(e)}
              />

              <TextAreaGroup
                field="description"
                value={this.state.description}
                label="Beskrivelse"
                error={this.state.errors.Description}
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
