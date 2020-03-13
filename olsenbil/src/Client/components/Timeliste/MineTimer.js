import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchMineTimer } from "../../actions/TimelisteAction";
import store from "../../../store";

class MineTimer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchMineTimer();
  }
  //const TimerItem = <th scope="row">{5}</th>;
  render() {
    console.log("Test log" + JSON.stringify(store.getState()));
    console.log("Test log id: " + this.props.Timer[0].id);
    const TimerItem = this.props.Timer.map(posts => (
      <div key={posts.id}>
        <h3>{posts.date}</h3>
      </div>
    ));

    //console.log("Test log av Timer item" + TimerItem);=

    return (
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
          <tr key={this.props.Timer[0].id}>
            <td>{this.props.Timer[0].date}</td>
            <td>{this.props.Timer[0].timeDeparture}</td>
            <td>{this.props.Timer[0].timeArrival}</td>
            <td>{this.props.Timer[0].Description}</td>
            <td>{this.props.Timer[0].HourCount}</td>
            <td>{this.props.Timer[0].outlayPayment}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

MineTimer.propTypes = {
  Timer: PropTypes.array.isRequired,
  fetchMineTimer: PropTypes.func.isRequired
  //Timer: PropTypes.array.isRequired,
  // newTime: PropTypes.object
};

function mapStateToProps(state) {
  return {
    Timer: state.Timelistereducer.Timer
  };
}
export default connect(mapStateToProps, { fetchMineTimer })(MineTimer);
/*

<tr key={timer.id}>
        <th scope="row">{timer.date}</th>
        <td>{timer.timeDeparture}</td>
        <td>{timer.timeArrival}</td>
        <td>{timer.Description}</td>
        <td>{timer.HourCount}</td>
        <td>{timer.outlayPayment}</td>
      </tr>



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
  <TimerItem />
</tbody>
</table>*/
