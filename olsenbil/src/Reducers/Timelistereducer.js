import { FETCH_MINE_TIMER } from "../../src/Client/actions/types";
import { REG_NYE_TIMER } from "../../src/Client/actions/types";

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
  console.log("TimelisteReducer initialstate: ", state, action);
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

    default:
      return {
        Timer: state.Timer
      };
  }
}
