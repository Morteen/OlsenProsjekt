import {
  FETCH_MINE_TIMER,
  REG_NYE_TIMER,
  DELETE_TIMER,
  EDIT_TIMER
} from "../../src/Client/actions/types";

const initialState = {
  Timer: [
    {
      id: 0,
      date: "20.01.2020",
      timeDeparture: "14.30",
      timeArrival: "15.30",
      Description: "Partytur med Egil",
      HourCount: 1,
      outlayPayment: 1000
    },
    {
      id: 1,
      date: "21.01.2020",
      timeDeparture: "14.30",
      timeArrival: "15.30",
      Description: "Kjørte svigemor til barnehagen",
      HourCount: 1,
      outlayPayment: 1000
    }
  ],
  nyTime: {}
};

export default function(state = initialState, action) {
  // console.log("TimelisteReducer initialstate: ", state, action);
  switch (action.type) {
    case FETCH_MINE_TIMER:
      return {
        //HTTP call
        ...state,
        Timer: action.payload
      };
    case REG_NYE_TIMER:
      console.log("RegNye timer " + JSON.stringify(action.payload));

      return {
        ...state,
        Timer: state.Timer.concat(action.payload)
      };
    case DELETE_TIMER:
      console.log("Deletetimer id i reducer " + JSON.stringify(action.payload));
      let testArray = state.Timer;
      console.log("Log av testArray i reducer" + JSON.stringify(testArray));
      testArray.splice(action.payload, 1); //slice(0, action.payload);
      console.log(
        "Log av testArray i reducer etter slice" + JSON.stringify(testArray)
      );

      return {
        ...state,
        Timer: testArray
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
        Timer: tempArray
      };

    default:
      return {
        Timer: state.Timer
      };
  }
}
