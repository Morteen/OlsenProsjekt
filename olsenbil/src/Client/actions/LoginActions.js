import { LOGIN } from "./types";
import axios from "axios";

export const userLoginReq = userData => dispatch => {
  return (
    fetch(`http://bilrapport.no/api/v1.0/Authentication`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData)
    })
      .then(
        res => res.json(),
        res => test(res)
      )
      //.then(data => localStorage.setItem("token", data.access_token))
      .then(data =>
        dispatch({
          type: LOGIN,
          payload: data
        })
      )
  );
};

function test(response) {
  if (response.ok) {
    {
      // Request success
      response.json().then(result => {
        if (result.access_token) {
          // Authentication success
          console.log("dette er sucesslog" + response.json());
        } else {
          response.json();
          console.log("dette er error log" + response.json());
        }
      });
    }
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
};*/
