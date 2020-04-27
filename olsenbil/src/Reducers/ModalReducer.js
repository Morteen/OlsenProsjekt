import {
  LOGOUTMODAL,
  LOGINMODAL,
  OPENLOGOUTMODAL,
  CLOSELOGOUTMODAL,
} from "../Client/actions/types";

const initialState = {
  LogOutModalOpen: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case CLOSELOGOUTMODAL:
      // console.log("ModalReducer CLOSELOGOUTMODAL svarer " + action.payload);
      return {
        ...state,
        LogOutModalOpen: action.payload,
      };
    case OPENLOGOUTMODAL:
      // console.log("ModalReducer OPENLOGOUTMODAL " + action.payload);
      return {
        ...state,
        LogOutModalOpen: action.payload,
      };

    default:
      return {
        ...state, // LogOutModalOpen: state.LogOutModalOpen,
      };
  }
}
