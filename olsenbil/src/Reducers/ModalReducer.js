import {
  LOGOUTMODAL,
  LOGINMODAL,
  OPENLOGOUTMODAL,
} from "../Client/actions/types";

const initialState = {
  LogOutModalOpen: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case LOGOUTMODAL:
      console.log("ModalReducer svarer " + action.payload);
      return {
        ...state,
        LogOutModalOpen: action.payload,
      };
    case OPENLOGOUTMODAL:
      console.log("Setter isAuth til true i reducer " + action.payload);
      return {
        ...state,
        LogOutModalOpen: action.payload,
      };

    default:
      return {
        LogOutModalOpen: state.LogOutModalOpen,
      };
  }
}
