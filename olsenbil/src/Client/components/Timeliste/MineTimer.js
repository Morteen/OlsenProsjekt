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
    this.props.fetchMineTimer();
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
    this.props.handleDeleteTimer(id);
    //Henter den ny Timer arrayen fra reducer
    this.props.fetchMineTimer();
    this.setState({ localTimerArray: this.props.Timer });
  }
  showContent() {
    if (this.state.localTimerArray.length < 1) {
      return (
        <tr>
          <td id="rowVarning">Du har ikke noen registerte timer enda</td>
        </tr>
      );
    } else {
      return this.state.localTimerArray.map(timer => (
        <tr key={timer.id}>
          <th scope="row">{timer.date}</th>
          <td>{timer.timeDeparture}</td>
          <td>{timer.timeArrival}</td>
          <td>{timer.Description}</td>
          <td>{timer.HourCount}</td>
          <td>{timer.outlayPayment}</td>
          <td>
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={id => this.handleDeleteRow(timer.id)}
            >
              Delete Row
            </button>
          </td>
          <td>
            <button
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#timerModal"
              onClick={id => this.replaceModalItem(timer.id)}
            >
              edit
            </button>
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

      console.log("Log av ModalData.timeArrival:" + modalData.timeArrival);
      console.log("Log av requiredItem:" + requiredItem);
      return (
        <TimerModal
          id={modalData.id}
          date={modalData.date}
          timeDeparture={modalData.timeDeparture}
          timeArrival={modalData.timeArrival}
          Description={modalData.Description}
          HourCount={modalData.HourCount}
          outlayPayment={modalData.outlayPayment}
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
              <th scope="col">Antall timer brukt</th>
              <th scope="col">Utlegg</th>
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
