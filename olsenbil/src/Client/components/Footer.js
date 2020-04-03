import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container-fluid padding">
          <div className="row text-center">
            <div className="col-md-4">
              <hr className="light" />
              <h5>Samarbeidspartnere</h5>
              <hr className="light" />
              <p></p>
            </div>
            <div className="col-md-4">
              <hr className="light" />
              <h5>Kontakt</h5>
              <hr className="light" />
              <p>mail@marensius.no</p>
              <p>Norway</p>
            </div>
            <div className="col-md-4">
              <hr className="light" />
              <h5> &nbsp; </h5>
              <hr className="light" />
              <p></p>
            </div>
            <div className="col-12">
              <hr className="light" />
              <h5>© bilrapport.no</h5>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
