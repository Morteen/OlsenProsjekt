import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchMineTimer } from "../../actions/TimelisteAction";

const MineTimer = props => (
  //const TimerItem = <th scope="row">{5}</th>;

  <div className="container-fluid">
    <h1>Mine timer</h1>
    {alert(props.count)}
    <table class="table">
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
      <tbody>
        <tr> Hei</tr>
        <tr> {props.count}</tr>
      </tbody>
    </table>
  </div>
);

MineTimer.propTypes = {
  // fetchMineTimer: PropTypes.func.isRequired,
  //Timer: PropTypes.array.isRequired,
  // newTime: PropTypes.object
};
const mapStateToProps = state => ({
  count: state.count
  //Timer: state.Timer,
  //newTime: state.Timer
});
export default connect(mapStateToProps)(MineTimer);

/*const TimerItem = this.props.Timer.map(timer => (
      <tr key={timer.id}>
        <th scope="row">{timer.date}</th>
        <td>{timer.timeDeparture}</td>
        <td>{timer.timeArrival}</td>
        <td>{timer.Description}</td>
        <td>{timer.HourCount}</td>
        <td>{timer.outlayPayment}</td>
      </tr>
    ));*/
