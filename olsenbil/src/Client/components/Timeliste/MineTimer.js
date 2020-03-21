import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  fetchMineTimer,
  handleDeleteTimer
} from "../../actions/TimelisteAction";
import store from "../../../store";

class MineTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minTestArray: []
    };
  }
  componentDidMount() {
    this.props.fetchMineTimer();
    console.log("Log av lengden på Timer Arrayen:" + this.props.Timer.length);
    this.setState({ minTestArray: this.props.Timer });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.nyTime) {
      console.log("NextProps verdi i loggen" + nextProps.nyTime);
      //this.props.posts.unshift(nextProps.nyTime);
      console.log(
        "Log av lengden på Timer Arrayen i componentWillReceiveProps " +
          this.props.Timer
      );
    }
  }

  /* static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.Timer !== prevState.Timer) {
      console.log("Tetst test test :" + { Timer: nextProps.Timer });
      return { Timer: nextProps.Timer };
    } else return null;
  }*/

  handleDeleteRow(id) {
    this.props.handleDeleteTimer(id);
    this.props.fetchMineTimer();
    console.log("Test log Timer-length: " + this.props.Timer.length);
    this.setState({ minTestArray: this.props.Timer });
  }

  render() {
    console.log("Test log" + JSON.stringify(store.getState()));
    console.log("Test log Timer-length: " + this.props.Timer.length);
    const TimerItem = this.state.minTestArray.map(timer => (
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
    ));

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
        <tbody>{TimerItem}</tbody>
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
