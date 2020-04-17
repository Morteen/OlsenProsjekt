import { LOGOUTMODAL, LOGINMODAL } from "./types";
export const CloseLogOutModal = () => (dispatch) => {
  console.log("ModalAction svarer med: false");
  return dispatch({
    type: LOGOUTMODAL,
    payload: false,
  });
};
export const CloseLogInModal = () => (dispatch) => {
  console.log("Setter false status til false logIn Modal");
  return dispatch({
    type: LOGINMODAL,
    payload: false,
  });
};
