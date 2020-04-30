import { AUTH } from "../Client/actions/types";

const initialState = {
  isAuth: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH:
      //console.log("Endrer isAuth i reducer til:  " + action.payload);
      return {
        ...state,
        isAuth: action.payload,
      };

    default:
      return {
        isAuth: state.isAuth,
      };
  }
}
