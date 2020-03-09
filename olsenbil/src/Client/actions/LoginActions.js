import { LOGIN } from "./types";

export const userLoginReq = userData => dispatch => {
  return (
    fetch(`http://bilrapport.no/api/v1.0/Authentication`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData)
    })
      .then(res => res.json())
      //.then(data => localStorage.setItem("token", data.access_token))
      .then(data =>
        dispatch({
          type: LOGIN,
          payload: data
        })
      )
      .catch(error => {
        console.log(JSON.stringify(error));
        dispatch({
          type: LOGIN,
          payload: error
        });
      })
  );
};
