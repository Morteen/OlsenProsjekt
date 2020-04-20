import {
  LOGOUTMODAL,
  LOGINMODAL,
  OPENLOGOUTMODAL,
  CLOSELOGOUTMODAL,
} from "./types";

export const OpenLogOutModal = () => (dispatch) => {
  //Åpner logoutmodalen
  console.log("ModalAction OpenLogOutModal svarer med: true");
  return dispatch({
    type: OPENLOGOUTMODAL,
    payload: true,
  });
};

export const CloseLogInModal = () => (dispatch) => {
  console.log("Setter false status til false logIn Modal");
  return dispatch({
    type: LOGINMODAL,
    payload: false,
  });
};

export const CloseLogOutModal = () => (dispatch) => {
  console.log("ModalAction CloseLogOutModal svarer med: false");
  return dispatch({
    type: CLOSELOGOUTMODAL,
    payload: false,
  });
};
