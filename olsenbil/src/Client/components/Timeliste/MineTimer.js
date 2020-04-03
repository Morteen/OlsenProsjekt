import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  fetchMineTimer,
  handleDeleteTimer,
  handleEditTimer
} from "../../actions/TimelisteAction";
import TimerModal from "../Modal/TimerModal";

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
    // console.log(JSON.stringify(this.state.localTimerArray));
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
            <span>---------</span>
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

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Dato</th>
              <th scope="col">Avreise</th>
              <th scope="col">Ankomst</th>
              <th scope="col">Beskrivelse</th>
              <th scope="col">Ordinæretimer</th>
              <th scope="col">50% overtid</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
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
