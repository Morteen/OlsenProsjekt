import React, { Component } from "react";

class MineTimer extends Component {
  render() {
    const list = [
      {
        id: 0,
        date: "20.01.2020",
        timeDeparture: "14.30",
        timeArrival: "15.30",
        Description: "Partytur med Egil",
        HourCount: 1,
        outlayPayment: 1000
      },
      {
        id: 1,
        date: "21.01.2020",
        timeDeparture: "14.30",
        timeArrival: "15.30",
        Description: "Kjørte svigemor til barnehagen",
        HourCount: 1,
        outlayPayment: 1000
      },
      {
        id: 2,
        date: "20.01.2020",
        timeDeparture: "14.30",
        timeArrival: "15.30",
        Description: "Jobbtur til bergen",
        HourCount: 16,
        outlayPayment: 1000
      }
    ];
    return (
      <div className="container-fluid">
        <h1>Mine timer</h1>

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
            {list.map(item => (
              <tr key={item.id}>
                <th scope="row">{item.date}</th>
                <td>{item.timeDeparture}</td>
                <td>{item.timeArrival}</td>
                <td>{item.Description}</td>
                <td>{item.HourCount}</td>
                <td>{item.outlayPayment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default MineTimer;
