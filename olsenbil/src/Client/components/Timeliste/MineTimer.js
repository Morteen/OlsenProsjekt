import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  fetchMineTimer,
  handleDeleteTimer
} from "../../actions/TimelisteAction";

class MineTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localTimerArray: []
    };
  }
  componentDidMount() {
    this.props.fetchMineTimer();
    this.setState({ localTimerArray: this.props.Timer });
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
        </tr>
      ));
    }
  }

  render() {
    /* const TimerItem = this.state.localTimerArray.map(timer => (
      <tr key={timer.id}>
        <th scope="row">{timer.date}</th>
        <td>{timer.timeDeparture}</td>
        <td>{timer.timeArrival}</td>
        <td>{timer.Description}</td>
        <td>{timer.HourCount}</td>
        <td>{timer.outlayPayment}</td>
        <td>
          <a onClick={id => this.handleDeleteRow(timer.id)}>Delete Row</a>
        </td>
      </tr>
    ));*/

    return (
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
    );
  }
}

MineTimer.propTypes = {
  Timer: PropTypes.array,
  fetchMineTimer: PropTypes.func.isRequired,
  handleDeleteTimer: PropTypes.func.isRequired,

  newRegtime: PropTypes.object
};

function mapStateToProps(state) {
  return {
    Timer: state.Timelistereducer.Timer
  };
}
export default connect(mapStateToProps, { fetchMineTimer, handleDeleteTimer })(
  MineTimer
);
