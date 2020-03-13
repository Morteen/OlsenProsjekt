import { LOGIN } from "../Client/actions/types";
const initialState = {
  accessCredentials: {}
};
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
        accessCredentials: action.payload
      };

    default:
      return state;
  }
  console.log(
    "Log av aceessToken i reduser: " + state.accessCredentials.accessToken
  );
}
