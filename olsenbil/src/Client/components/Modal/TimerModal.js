import React, { Component } from "react";
import PropTypes from "prop-types";
import TextFieldGroup from "../commen/TextFieldGroup";
import TextAreaGroup from "../commen/TextAreaGroup";

class TimerModal extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      id: "",
      date: "",
      timeDeparture: "",
      timeArrival: "",
      Description: "",
      HourCount: 0,
      outlayPayment: 0,
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.id,
      date: nextProps.date,
      timeDeparture: nextProps.timeDeparture,
      timeArrival: nextProps.timeArrival,
      Description: nextProps.Description,
      HourCount: nextProps.HourCount,
      outlayPayment: nextProps.outlayPayment
    });
  }

  idHandler(e) {
    this.setState({ id: e.target.value });
  }
  dateHandler(e) {
    this.setState({ date: e.target.value });
  }

  timeDepartureHandler(e) {
    this.setState({ timeDeparture: e.target.value });
  }

  timeArrivalHandler(e) {
    this.setState({ timeArrival: e.target.value });
  }
  DescriptionHandler(e) {
    this.setState({ Description: e.target.value });
  }
  HourCountHandler(e) {
    this.setState({ HourCount: e.target.value });
  }
  outlayPaymentHandler(e) {
    this.setState({ outlayPayment: e.target.value });
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
                field="timeDeparture"
                value={this.state.timeDeparture}
                label="Avreise tidspunkt"
                error={this.state.errors.timeDeparture}
                placeholder="Avreise tid"
                onChange={e => this.timeDepartureHandler(e)}
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
                onChange={e => this.timeArrivalHandler(e)}
                min="00:00"
                max="23:59"
              />

              <TextFieldGroup
                type="number"
                field="HourCount"
                value={this.state.HourCount.toString()}
                label="Timeforbruk"
                error={this.state.errors.HourCount}
                placeholder="Antall timer forbrukt"
                onChange={e => this.HourCountHandler(e)}
              />

              <TextFieldGroup
                type="number"
                field="outlayPayment"
                value={this.state.outlayPayment.toString()}
                label="Mine utlegg"
                error={this.state.errors.outlayPayment}
                placeholder="Sum av utlegg"
                onChange={e => this.outlayPaymentHandler(e)}
              />

              <TextAreaGroup
                field="Description"
                value={this.state.Description}
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
