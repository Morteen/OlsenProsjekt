import { AUTH } from "./types";
export const UserIsAuthenticated = () => (dispatch) => {
  console.log("Setter AUTH til true");
  return dispatch({
    type: AUTH,
    payload: true,
  });
};
