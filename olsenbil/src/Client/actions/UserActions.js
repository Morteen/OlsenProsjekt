import { AUTH } from "./types";
export const UserIsAuthenticated = () => (dispatch) => {
  console.log("Setter AUTH til true");
  return dispatch({
    type: AUTH,
    payload: true,
  });
};
export const UserIsLoggingOut = () => (dispatch) => {
  console.log("Setter AUTH til false");
  return dispatch({
    type: AUTH,
    payload: false,
  });
};
