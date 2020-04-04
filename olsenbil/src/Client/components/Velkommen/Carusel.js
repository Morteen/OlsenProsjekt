import React, { Component } from "react";
import E46 from "../../../images/E46.jpg";
import DSC_0355 from "../../../images/DSC_0355.JPG";
import GTI from "../../../images/GTI.jpg";

export default class Carusel extends Component {
  render() {
    return (
      <div>
        <div id="slides" class="carousel slide" data-ride="carousel">
          <ul className="carousel-indicators">
            <li data-target="#slides" data-slide-to="0" class=""></li>
            <li data-target="#slides" data-slide-to="1" class=""></li>
            <li data-target="#slides" data-slide-to="2" class="active"></li>
          </ul>
          <div className="carousel-inner">
            <div className="carousel-item">
              <img src={E46} />
              <div className="carousel-caption">
                <h1 className="display-2">Bilrapport.no</h1>
                <h3>Fullstendig oversikt over dine kjøretøyskostander</h3>
                <button type="button" className="btn btn-outline-light btn-lg">
                  Logg inn
                </button>
                <button type="button" className="btn btn-primary btn-lg">
                  Registrer deg
                </button>
              </div>
            </div>
            <div className="carousel-item">
              <img src={DSC_0355} />
              <div className="carousel-caption">
                <h1 className="display-2">Bilrapport.no</h1>
                <h3>Fullstendig oversikt over dine kjøretøyskostander</h3>
                <button type="button" class="btn btn-outline-light btn-lg">
                  Logg inn
                </button>
                <button type="button" className="btn btn-primary btn-lg">
                  Registrer deg
                </button>
              </div>
            </div>
            <div className="carousel-item active">
              <img src={GTI} />
              <div className="carousel-caption">
                <h1 className="display-2">Bilrapport.no</h1>
                <h3>Fullstendig oversikt over dine kjøretøyskostander</h3>
                <button type="button" className="btn btn-outline-light btn-lg">
                  Logg inn
                </button>
                <button type="button" className="btn btn-primary btn-lg">
                  Registrer deg
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
