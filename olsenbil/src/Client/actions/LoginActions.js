import { LOGIN } from "./types";
import axios from "axios";

export const userLoginReq = userData => dispatch => {
  return fetch(`http://testapi.bilrapport.no/api/v1.0/Authentication`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData)
  })
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: LOGIN,
        payload: data
      })
    );
};

export function userLoginReq2(userData) {
  return dispatch => {
    return axios.post(
      "http://testapi.bilrapport.no/api/v1.0/Authentication",
      userData
    );
  };
}

export const userLoginReq1 = userData => dispatch => {
  return fetch(`http://testapi.bilrapport.no/api/v1.0/Authentication`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData)
  }).then(res => {
    if (res.ok) {
      console.warn("Res fra loginAction: " + res);
      res.json().then(data =>
        dispatch({
          type: LOGIN,
          payload: data
        })
      );
    } else if (res.status == 401) {
      console.warn(res.status);
      dispatch({
        type: LOGIN,
        payload: res.status
      });
    } else if (res.status == 500) {
      console.warn(res.status);
      dispatch({
        type: LOGIN,
        payload: res.status
      });
    }
  });
};

/**.then(res => {
    if (res.ok) {
      res.json().then(
        data =>
          dispatch({
            type: LOGIN,
            payload: data
          }),
        localStorage.setItem("Token", res.access_token)
      );
    } else if (res.status == 401) {
      function test() {
        alert("Access denied: 401");
        dispatch({
          type: LOGIN,
          payload: "Access denied: 401"
        });
      }
    } else if (res.status == 500) {
      function test2() {
        alert("Server Error 500");
        dispatch({
          type: LOGIN,
          payload: "Server Error 500"
        });
      }
    }
  }); */
