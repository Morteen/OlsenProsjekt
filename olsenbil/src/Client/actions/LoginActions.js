export function userLoginReq(userData) {
  fetch(`http://bilrapport.no/api/v1.0/Authentication`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData)
  }).then(res => res.json());
  /*.then(data =>
      //console.log("Log fra LoginAction " + data.access_token)
      localStorage.setItem("token", data.access_token)
    );*/
}

/**return dispatch => {
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
            localStorage.setItem("token", result.access_token);
            console.log("Authentication success");
            //setIsAuthenticated(true);
          } else {
            response.json();
            // Authentication failed
            console.log("Authentication failed");
          }
        });
      } else {
        if (response.status === 401) {
          response.text().then(value => {
            //setResult(`401 - ${value}`);
            console.log("401 !!!");
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }; */
