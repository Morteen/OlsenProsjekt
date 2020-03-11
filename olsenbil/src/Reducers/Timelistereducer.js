import FETCH_MINE_TIMER from "../Client/actions/types";
//const initialState = {};
/*const initialState = {
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
    },
    {
      id: 2,
      date: "20.01.2020",
      timeDeparture: "14.30",
      timeArrival: "15.30",
      Description: "Jobbtur til bergen",
      HourCount: 16,
      outlayPayment: 1000
    }
  ],
  item: {}
};*/
const initialState = {
  count: 0
};
export default function(state = initialState, action) {
    switch (action.type) {
        case "INCREMENT":
          return { count: state.count + 1 };
        default:
          return {
            count: state.count
          };
      }
