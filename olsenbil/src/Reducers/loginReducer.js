import { LOGIN } from "../Client/actions/types";
const initialState = {};
export default function(state = initialState, action) {
  console.log(
    "Log fra loginReducer: " +
      JSON.stringify(action.payload) +
      " Action type: " +
      action.type
  );
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        accessToken: action.payload
      };

    default:
      return state;
  }
  console.log("Log av aceessToken i reduser: " + state.accessToken);
}
