export function userLoginReq(userData) {
  fetch(`http://bilrapport.no/api/v1.0/Authentication`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData)
  })
    .then(response => {
      return response.json();
      localStorage.setItem("token", response.access_token);
    })
    .then(data => {
      console.log("Logger data fra Action " + data.access_token);
    });
}

/*
export function userLoginReq(userData) {
  return dispatch => {
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
      return response.json();
    } catch (error) {
      console.log(error);
    }
  };
}*/
