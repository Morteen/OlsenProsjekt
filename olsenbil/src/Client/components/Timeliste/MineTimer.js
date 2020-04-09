import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  fetchMineTimer,
  handleDeleteTimer,
  handleEditTimer
} from "../../actions/TimelisteAction";
import TimerModal from "../Modal/TimerModal";
import TotalTimer from "./TotalTimer";

class MineTimer extends Component {
  constructor(props) {
    super(props);
    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);
    this.state = {
      localTimerArray: [],
      requiredItem: 0
    };
  }
  componentDidMount() {
    //this.props.fetchMineTimer();
    this.setState({ localTimerArray: this.props.Timer });
  }

  ///Modal funksjoner
  replaceModalItem(index) {
    console.log("Log av replaceModalItem:" + index);
    this.setState({
      requiredItem: index
    });
  }

  saveModalDetails(item) {
    const requiredItem = this.state.requiredItem;
    let tempTimerArray = this.state.localTimerArray;
    this.props.handleEditTimer(item); //Ved positv respons herfra kan resten utføres
    tempTimerArray[requiredItem] = item;
    this.setState({ localTimerArray: tempTimerArray });
  }
  deleteItem(index) {
    let tempTimerArray = this.state.localTimerArray;
    tempTimerArray.splice(index, 1);
    this.setState({ localTimerArray: tempTimerArray });
  }

  handleDeleteRow(id) {
    console.log("HandelDeleterow  id: " + id);
    this.props.handleDeleteTimer(id);
    //Henter den ny Timer arrayen fra reducer
    //this.props.fetchMineTimer(); //Må aktivers når man gjør kall utkommentert nå for å etste om sletting virker
    this.setState({ localTimerArray: this.props.Timer });
  }
  showContent() {
    console.warn(
      "ShowContent funksjonen " +
        JSON.stringify(this.state.localTimerArray.length)
    );
    if (this.state.localTimerArray.length < 1) {
      return (
        <tr>
          <td id="rowVarning">Du har ikke noen registerte timer enda</td>
        </tr>
      );
    } else {
      return this.state.localTimerArray.map((timer, index) => (
        <tr key={index}>
          <th scope="row">{timer.date}</th>
          <td>{timer.fromTime}</td>
          <td>{timer.toTime}</td>
          <td>{timer.description}</td>
          <td>{timer.ordinaryHours}</td>
          <td>{timer.fiftyProcentHours}</td>
          <td>{timer.hundredProcentHours}</td>
          <td>{timer.tripDays}</td>
          <td>{timer.bankedTime}</td>
          <td>{timer.timeOffInLieu}</td>
          <td>
            <i
              className="fas fa-trash"
              onClick={() => this.handleDeleteRow(index)}
            ></i>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <i
              data-toggle="modal"
              data-target="#timerModal"
              onClick={() => this.replaceModalItem(index)}
              className="fas fa-edit"
            ></i>
          </td>
        </tr>
      ));
    }
  }

  showmodal() {
    const requiredItem = this.state.requiredItem;
    console.log("requiredItem " + requiredItem);
    if (this.state.localTimerArray.length >= 1) {
      let modalData = this.state.localTimerArray[requiredItem];

      console.log("Log av ModalData.timeArrival:" + JSON.stringify(modalData));
      console.log("Log av requiredItem:" + requiredItem);
      return (
        <TimerModal
          index={requiredItem}
          date={modalData.date}
          fromTime={modalData.fromTime}
          toTimel={modalData.toTime}
          description={modalData.description}
          ordinaryHours={modalData.ordinaryHours}
          fiftyProcentHours={modalData.fiftyProcentHours}
          hundredProcentHours={modalData.hundredProcentHours}
          tripDays={modalData.tripDays}
          bankedTime={modalData.bankedTime}
          timeOffInLieu={modalData.timeOffInLieu}
          saveModalDetails={this.saveModalDetails}
        />
      );
    }
  }
  calculateTotalHour() {
    if (this.state.localTimerArray.length == 0) {
      console.warn("Totalhour lengde " + this.state.localTimerArray.length);
      return (
        <TotalTimer
          totalHour={0}
          fiftyProcentHours={0}
          hundredProcentHours={0}
          bankedTime={0}
          timeOffInLieu={0}
          balance={0}
        />
      );
    } else if (this.state.localTimerArray.length >= 1) {
      let totalHour = 0;
      let fifty = 0;
      let hundred = 0;
      let banked = 0;
      let timeOffInLieu = 0;
      let balance = 0;
      this.state.localTimerArray.forEach(
        time => (totalHour = totalHour + parseInt(time.ordinaryHours))
      );
      this.state.localTimerArray.forEach(time =>
        console.log("  fifty  " + time.fiftyProcentHours)
      );
      this.state.localTimerArray.forEach(
        time => (fifty = fifty + parseFloat(time.fiftyProcentHours) + 0)
      );
      this.state.localTimerArray.forEach(
        time => (banked = banked + parseFloat(time.bankedTime))
      );
      this.state.localTimerArray.forEach(
        time => (hundred = hundred + parseFloat(time.hundredProcentHours))
      );
      this.state.localTimerArray.forEach(
        time => (timeOffInLieu = timeOffInLieu + parseFloat(time.timeOffInLieu))
      );

      balance = banked - timeOffInLieu + 0;

      return (
        <TotalTimer
          totalHour={totalHour}
          fiftyProcentHours={fifty}
          hundredProcentHours={hundred}
          bankedTime={banked}
          timeOffInLieu={timeOffInLieu}
          balance={balance}
        />
      );
    }
  }

  render() {
    return (
      <div>
        {this.calculateTotalHour()}

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Dato</th>
              <th scope="col">Avreise</th>
              <th scope="col">Ankomst</th>
              <th scope="col">Beskrivelse</th>
              <th scope="col">Ordinæretimer</th>
              <th scope="col">50% overtid</th>
              <th>hundredProcentHours</th>
              <th>tripDays</th>
              <th>banked</th>
              <th>timeOff</th>
            </tr>
          </thead>
          <tbody>{this.showContent()}</tbody>
        </table>
        {this.showmodal()}
      </div>
    );
  }
}

MineTimer.propTypes = {
  Timer: PropTypes.array,
  fetchMineTimer: PropTypes.func.isRequired,
  handleDeleteTimer: PropTypes.func.isRequired,
  handleEditTimer: PropTypes.func.isRequired,

  newRegtime: PropTypes.object
};

function mapStateToProps(state) {
  return {
    Timer: state.Timelistereducer.Timer
  };
}
export default connect(mapStateToProps, {
  fetchMineTimer,
  handleDeleteTimer,
  handleEditTimer
})(MineTimer);
