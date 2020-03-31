import {
  FETCH_MINE_TIMER,
  REG_NYE_TIMER,
  DELETE_TIMER,
  EDIT_TIMER
} from "./types";

export const fetchMineTimer = () => dispatch => {
  console.log("FetchTimer svarer når siden blir lastet");
  let userData = {
    username: "40042106",
    password: "#071362Morten",
    dateFrom: "20.01.2019",
    dateTo: "25.03.2020",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtb3J0ZW5vbHNlbjRAZ21haWwuY29tIiwianRpIjoiODY5YzY1NDFhNmU1NGEwZTg0MmMyZjZhNDhjYjIwMmUiLCJpYXQiOiIzMS4wMy4yMDIwIDA5OjM2OjAwIiwidXNlckluZm8iOiJ7XCJJZFwiOjEwMDIzLFwiRW1haWxcIjpcIm1vcnRlbm9sc2VuNEBnbWFpbC5jb21cIixcIk1vYmlsZVwiOlwiNDAwNDIxMDZcIixcIlBvc3RhbENvZGVcIjpcIjM3MzFcIn0iLCJuYmYiOjE1ODU2NDczNjAsImV4cCI6MTU4NTY1MDk2MCwiaXNzIjoiQmlscmFwcG9ydC5ubyIsImF1ZCI6IlJlZ2lzdGVyZWQgdXNlcnMifQ.Rnn44tvPW7MIc5mpDBdxpnPrhTxiYfeATpZqqMRRpTY"
  };

  return fetch(
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
  )
    .then(res => res.json()) //https://jsonplaceholder.typicode.com/posts
    .then(res =>
      dispatch({
        type: FETCH_MINE_TIMER,
        payload: res
      })
    );
};

export const RegNyeTimer = RegTimerData => dispatch => {
  console.log("RegNyeTimer svarer: " + RegTimerData);

  //Http call
  //Legg inn RegTimerDate eller response i dispatch

  return dispatch({
    type: REG_NYE_TIMER,
    payload: RegTimerData
  });
};

export const handleDeleteTimer = DelTimerData => dispatch => {
  console.log("handleDeleteTimer svarer: " + DelTimerData);

  //Http call
  //Legg inn RegTimerDate eller response i dispatch

  return dispatch({
    type: DELETE_TIMER,
    payload: DelTimerData
  });
};
export const handleEditTimer = editTimerData => dispatch => {
  console.log("handleDeleteTimer svarer: " + editTimerData);

  //Http call
  //Legg inn editTimerDate eller response i dispatch

  return dispatch({
    type: EDIT_TIMER,
    payload: editTimerData //Payload fra http req
  });
};

//handleDeleteTimer
/* if (response.ok) {
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
  }*/
