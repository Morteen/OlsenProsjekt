import React, { Component } from "react";

export default class Figure extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid">
          <div class="row jumbotron">
            <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
              <p class="lead">
                Denne siden er foreløpig gratis, men det er såklart noen
                kostnader rundt den med hosting og vedlikehold. Dersom du ønsker
                å støtte siden så vi kan holde den gratis så doner gjerne.
              </p>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2">
              <a href="#">
                <button type="button" class="btn btn-outline-secondary btn-lg">
                  Donate
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="container-fluid padding">
          <div className="row welcome text-center">
            <div class="col-12">
              <h1 className="display-4">Bilrapport.no</h1>
            </div>
            <hr />
            <div className="col-12">
              <p class="lead">
                Dette er en løsning for føring av kjøretøyskostnader. Vi
                oppdaterer nettsidene hyppig og det kommer stadig nye moduler i
                løsningen. Etter mange år med en enkel kode har vi sett behovet
                for å utvide da det stadig blir flere brukere. Så nå har vi
                støtte for mer føringer av kostnader samt timeføring dersom man
                ønsker å se hvor lang tid man bruker på gitte prosjekter eller
                biler.
              </p>
            </div>
          </div>
          <hr className="my-4" />
        </div>

        <figure>
          <div className="fixed-wrap">
            <div id="fixed"></div>
          </div>
        </figure>
      </div>
    );
  }
}
