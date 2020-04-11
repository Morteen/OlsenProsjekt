import {
  FETCH_MINE_TIMER,
  REG_NYE_TIMER,
  DELETE_TIMER,
  EDIT_TIMER,
} from "../../src/Client/actions/types";

const initialState = {
  Timer: [
    {
      mobile: 40042106,
      date: "2020-02-02T00:00:00",
      fromTime: "23:30:00",
      toTime: "08:30:00",
      description: "Valestrand marina. Storfjord",
      ordinaryHours: "0",
      fiftyProcentHours: "0",
      hundredProcentHours: "8",
      tripDays: 0,
      bankedTime: "",
      timeOffInLieu: "",
      registeredTime: "2020-02-04T00:35:59.17",
    },
  ],
  nyTime: {},
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

    default:
      return {
        Timer: state.Timer,
      };
  }
}
