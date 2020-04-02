import { LOGIN } from "../Client/actions/types";
const initialState = {
  accessCredentials: {
    error: ""
  }
};
export default function(state = initialState, action) {
  console.log(
    "Log fra loginReducer: " + action.payload + " Action type: " + action.type
  );
  switch (action.type) {
    case LOGIN:
      if (action.payload == 401 || action.payload == 500) {
        let test = { error: "" };
        test.error = action.payload;

        return {
          ...state,
          accessCredentials: test
        };
      } else {
        return {
          ...state,
          accessCredentials: action.payload
        };
      }

    default:
      return { ...state };
  }
  console.log(
    "Log av aceessToken i reduser: " + state.accessCredentials.accessToken
  );
}
