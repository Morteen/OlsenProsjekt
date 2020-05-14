import {
  FETCH_MINE_TIMER,
  REG_NYE_TIMER,
  DELETE_TIMER,
  EDIT_TIMER,
  SEARCH_HOURS,
} from "../../src/Client/actions/types";

const initialState = {
  Timer: [],
  MySearchedHours: [],
};

export default function (state = initialState, action) {
  // console.log("TimelisteReducer initialstate: ", state, action);
  switch (action.type) {
    case FETCH_MINE_TIMER:
      return {
        ...state,
        Timer: action.payload,
      };
    case REG_NYE_TIMER:
      //  console.log("RegNye timer " + JSON.stringify(action.payload));

      return {
        ...state,
        Timer: state.Timer.concat(action.payload),
      };
    case DELETE_TIMER:
      console.log("Deletetimer id i reducer " + action.payload);
      let testArray = state.Timer;
      console.log("Log av testArray i reducer" + testArray);
      testArray.splice(action.payload, 1); //slice(0, action.payload);
      console.log(
        "Log av testArray i reducer etter slice" + JSON.stringify(testArray)
      );

      return {
        ...state,
        Timer: testArray,
      };

    case EDIT_TIMER:
      console.log(
        "Log av payload i EDIT_MAINTENANCE reducer" +
          JSON.stringify(action.payload)
      );
      let tempArray = state.Timer;
      tempArray[action.payload.id] = action.payload;
      return {
        ...state,
        Timer: tempArray,
      };
    case SEARCH_HOURS:
      console.log(
        " MySearchedHours i reduser etter kall " +
          JSON.stringify(action.payload)
      );
      return {
        ...state,
        MySearchedHours: action.payload,
      };

    default:
      return {
        Timer: state.Timer,
      };
  }
}
