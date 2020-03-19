import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchMyStats } from "../../actions/FyllingActions";
import store from "../../../store";

class FyllingStats extends Component {
  constructor(props) {
    super(props);
    console.log("Log av props i constructor: " + JSON.stringify(this.props));
    this.state = {
      myStats: this.props.MyStats
    };
  }
  /*componentWillReceiveProps(nextProps) {
    if (nextProps.newStat) {
      console.log(
        "NextProps verdi i loggen" + JSON.stringify(nextProps.newStat)
      );
      //this.props.posts.unshift(nextProps.newStat;
      console.log(
        "props.post innhold i  componentWillReceiveProps " +
          JSON.stringify(this.props.MyStats.TotalSum)
      );
    }
  }*/

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.newStat !== prevState.newStat) {
      console.log("Tetst test test :" + { newStat: nextProps.newStat });
      // return {newStat : nextProps.newStat};
    } else return null;
  }

  render() {
    console.log("I render metoden: " + JSON.stringify(this.state.MyStats));
    return (
      <div>
        <h1>Statestikk</h1>
        {this.props.MyStats.TotalSum}
        <hr></hr>
      </div>
    );
  }
}

FyllingStats.propTypes = {
  fetchMyStats: PropTypes.func.isRequired,
  MyStats: PropTypes.object,
  newStat: PropTypes.object
};
const mapStateToProps = state => ({
  MyStats: state.FyllingReducer.MyStats,
  newStat: state.FyllingReducer.newStats
});

export default connect(mapStateToProps, { fetchMyStats })(FyllingStats);
