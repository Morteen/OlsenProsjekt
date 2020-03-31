import * as React from "react";
import { Component } from "react";

//http://bilrapport.no/api/docs/
export default class DevelopSite extends Component {
  constructor(props) {
    super(props);

    this.testfunc2 = this.testfunc2.bind(this);

    this.state = {
      requiredItem: 0,
      localMaintenaceArray: [],
      modalData: {}
    };
  }

  testfunc2 = async () => {
    console.log("Går inn i testfunc2");
    /**api/v1.0/Timesheet/GetMyTimesheet/{40042106}/{'2020-02-02'}/{'2020-02-28'} */
    let userData = {
      username: "40042106",
      password: "#071362Morten",
      dateFrom: "20.01.2019",
      dateTo: "25.03.2020",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtb3J0ZW5vbHNlbjRAZ21haWwuY29tIiwianRpIjoiYjY1ZTU5NDgxZjVmNDI0NGIxN2YxMzc4YTQxOGQwZTQiLCJpYXQiOiIzMC4wMy4yMDIwIDEzOjAxOjMxIiwidXNlckluZm8iOiJ7XCJJZFwiOjEwMDIzLFwiRW1haWxcIjpcIm1vcnRlbm9sc2VuNEBnbWFpbC5jb21cIixcIk1vYmlsZVwiOlwiNDAwNDIxMDZcIixcIlBvc3RhbENvZGVcIjpcIjM3MzFcIn0iLCJuYmYiOjE1ODU1NzMyOTEsImV4cCI6MTU4NTU3Njg5MSwiaXNzIjoiQmlscmFwcG9ydC5ubyIsImF1ZCI6IlJlZ2lzdGVyZWQgdXNlcnMifQ.Ke1bvl5bw8glhv83ukHQaR4J3k1m3gl6x4ZLNRrDSQc"
    };

    try {
      const response = await fetch(
        "https://testapi.bilrapport.no/api/v1.0/Timesheet/GetMyTimesheet/40042106/2020-02-02/2020-02-28",
        {
          method: "GET",
          //mode: "no-cors", // mode: 'cors', // no-cors, *cors, same-origin, *cors, same-origin
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${userData.token}`

            // ;body:userData
          }
        }
      );

      if (response.ok) {
        // Request success
        response.json().then(result => {
          console.log("yep!");
          alert("Hurra");
          console.log(JSON.stringify(result));
        });
      } else {
        console.log(`bearer ${userData.token}`);
        console.log("Prøver å skrive responds");
        if (response.status === 401) {
          //alert("401");
        }
      }
    } catch (error) {
      alert(error);
      console.log("Error!");
    }
  };

  render() {
    return (
      <div>
        {console.log("Test")}
        Test test
        <br />
        <button
          type="button"
          className="btn btn-danger btn-lg"
          onClick={id => this.testfunc2()}
        />
      </div>
    );
  }
}
