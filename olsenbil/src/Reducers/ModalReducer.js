import { LOGOUTMODAL, LOGINMODAL } from "../Client/actions/types";

const initialState = {
  LogOutModalOpen: true,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case LOGOUTMODAL:
      console.log("ModalReducer svarer " + action.payload);
      return {
        ...state,
        LogOutModalOpen: action.payload,
      };
    /* case LOGINMODAL:
      console.log("Setter isAuth til true i reducer " + action.payload);
      return {
        ...state,
        LogInModalOpen: action.payload,
      };*/

    default:
      return {
        LogOutModalOpen: state.LogOutModalOpen,
      };
  }
}
