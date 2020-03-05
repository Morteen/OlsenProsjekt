import axios from "axios";
export function userLoginReq(userData) {
  // console.log("Log fra signupActions " + userData);
  return dispatch => {
    return axios
      .post("https://bilrapport.no/checklogin.php", {
        username: userData.userName,
        password: userData.password
      })
      .catch(err => console.error("Logg av error melding " + err));
  };
}
