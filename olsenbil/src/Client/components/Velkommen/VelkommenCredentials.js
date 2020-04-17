import React, { Component } from "react";
import team1 from "../../../images/team1.jpg";
import egil from "../../../images/egil.png";
import team3 from "../../../images/team3.jpg";
export default class VelkommenCredentials extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid padding">
          <div className="row welcome text-center">
            <div className="col-12">
              <h1 className="display-4">Utviklings teamet</h1>
            </div>
            <hr></hr>
          </div>
        </div>

        <div className="container-fluid padding">
          <div className="row padding">
            <div className="col-md-4">
              <div className="card">
                <img alt="Haavard" className="card-img-top" src={team1} />
                <div className="card-body">
                  <h4 className="card-title">Haavard M Olsen</h4>
                  <p className="card-text"></p>
                  <a
                    href="https://www.facebook.com/haavard.olsen"
                    className="btn btn-outline-secondary"
                  >
                    Gå til profil
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img alt="Egil" className="card-img-top" src={egil} />
                <div className="card-body">
                  <h4 className="card-title">Egil Opstad</h4>
                  <p className="card-text"></p>
                  <a
                    href="https://www.facebook.com/egil.opstad"
                    className="btn btn-outline-secondary"
                  >
                    Gå til profil
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img alt="Morten Olsen" className="card-img-top" src={team3} />
                <div className="card-body">
                  <h4 className="card-title">Morten Olsen</h4>
                  <p className="card-text"></p>
                  <a
                    href="https://www.facebook.com/morten.olsen.9231"
                    className="btn btn-outline-secondary"
                  >
                    Gå til profil
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
