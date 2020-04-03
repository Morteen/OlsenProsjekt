import { LOGIN } from "./types";

export const userLoginReq = userData => dispatch => {
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
