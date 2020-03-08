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
  );
};

/*export const userLoginReq = userData => dispatch => {
  try {
    const response = fetch(`http://bilrapport.no/api/v1.0/Authentication`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData)
    });
    if (response.ok) {
      // Request success
      response.json().then(result => {
        if (result.access_token) {
          // Authentication success
          //setResult(result.access_token);
          //localStorage.setItem("token", result.access_token);
          //setIsAuthenticated(true);
        } else {
          response.json();
          // Authentication failed
          //setResult("Failed!");
        }
      });
    } else {
      if (response.status === 401) {
        response.text().then(value => {
          //setResult(`401 - ${value}`);
        });
      }
    }
    response.json().then(data =>
      dispatch({
        type: LOGIN,
        payload: data
      })
    );
  } catch (error) {
    //setResult(error);
  }
};
*/
