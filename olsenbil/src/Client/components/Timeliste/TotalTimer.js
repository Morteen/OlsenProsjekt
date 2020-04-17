import React, { Component } from "react";

class TotalTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalHour: "",
      fiftyProcentHours: "",
      hundredProcentHours: "",
      bankedTime: "",
      timeOffInLieu: "",
      balance: "",
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      totalHour: nextProps.totalHour,
      fromTime: nextProps.fromTime,
      toTime: nextProps.toTime,
      ordinaryHours: nextProps.ordinaryHours,
      fiftyProcentHours: nextProps.fiftyProcentHours,
      hundredProcentHours: nextProps.hundredProcentHours,
      bankedTime: nextProps.bankedTime,
      timeOffInLieu: nextProps.timeOffInLieu,
      balance: nextProps.balance,
    });
  }

  render() {
    return (
      <div id="totalcost">
        <h3 id="TotalcostHeading">Mine registerte timer</h3>
        <div className="container-fluid padding">
          <div className="row text-center">
            <div className="col-md-4">
              <hr className="light" />
              <h6>Totaltantall timer</h6>
              <hr className="light" />
              <h6>50% overtid </h6>
              <hr className="light" />
              <h6>100% overtid </h6>
              <p></p>
            </div>
            <div className="col-md-4">
              <hr className="light" />
              <p>{this.state.totalHour}</p>
              <hr className="light" />
              <p>{this.state.fiftyProcentHours} timer 50%</p>
              <hr className="light" />
              <p>{this.state.hundredProcentHours} timer 100%</p>
            </div>
            <div className="col-md-4">
              <hr className="light" />
              <h6>Avspasering</h6>
              <hr className="light" />
              <p>Mertid: {this.state.bankedTime}</p>
              <hr className="light" />
              <p>Mindretid: {this.state.timeOffInLieu} </p>

              <hr className="light" />
              <p>Balanse: {this.state.balance}</p>
              <p></p>
            </div>
            <div className="col-12">
              <hr className="light" />
              <h6>© bilrapport.no</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TotalTimer;
