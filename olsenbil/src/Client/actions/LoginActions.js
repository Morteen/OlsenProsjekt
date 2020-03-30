import { LOGIN } from "./types";
import axios from "axios";

export const userLoginReq = userData => dispatch => {
  return fetch(`http://testapi.bilrapport.no/api/v1.0/Authentication`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData)
  }).then(
    res => {
      if (res.ok) {
        res.json().then(data =>
          dispatch({
            type: LOGIN,
            payload: data
          })
        );
      } else {
        console.log(res);
        if (res.status === 401) {
          alert("Alert fra loginn 500");
          dispatch({
            type: LOGIN,
            payload: res.status
          });
        } else if (res.status == 500) {
          alert("Alert fra loginn 500");
        }
      }
    }

    //res => res.json(),
    //res => test(res)
  );
  //.then(data => localStorage.setItem("token", data.access_token))

  /*  .then(data =>
        dispatch({
          type: LOGIN,
          payload: data
        })
      )*/
};

function test(response) {
  if (response) {
  }
}
/*export const userLoginReq = userData => dispatch => {
  return axios
    .post("/user", {
      params: {
        userCred: userData
      }
    })
    .then(data =>
      dispatch({
        type: LOGIN,
        payload: data
      })
    )

    .then(response => console.log("Dette er errorloggen " + response))
    .catch(function(error) {
      console.log(error);
    });
}*/
