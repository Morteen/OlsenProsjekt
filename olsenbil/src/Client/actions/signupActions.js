import axios from "axios";
export function userSignupReq(userData) {
  // console.log("Log fra signupActions " + userData);
  return dispatch => {
    return axios
      .post("http://bilrapport.no/api/v1.0/User/RegisterUser", {
        userData
      })
      .catch(err => console.error("Logg av error melding " + err));
  };
}
