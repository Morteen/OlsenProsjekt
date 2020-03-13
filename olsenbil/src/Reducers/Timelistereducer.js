import { FETCH_MINE_TIMER } from "../../src/Client/actions/types";
/*const initialState = {
  Timer: []
};*/
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
    }
  ]
};

export default function(state = initialState, action) {
  console.log("TimelisteReducer", state, action);
  switch (action.type) {
    case FETCH_MINE_TIMER:
      return {
        ...state,
        Timer: action.payload
      };
      console.log("TimelisteReducer", state, action);
    default:
      return {
        Timer: state.Timer
      };
  }
}
