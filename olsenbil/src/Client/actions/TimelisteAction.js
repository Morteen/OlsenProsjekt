import { FETCH_MINE_TIMER, REG_NYE_TIMER } from "./types";

export const fetchMineTimer = () => dispatch => {
  console.log("FetchTimer svarer når siden blir lastet");
  const Timer = [
    {
      id: 0,
      date: "20.01.2020",
      timeDeparture: "14.30",
      timeArrival: "15.30",
      Description: "Partytur med Egil",
      HourCount: 1,
      outlayPayment: 1000
    }
  ];
  /*,

    {
      id: 1,
      date: "21.01.2020",
      timeDeparture: "14.30",
      timeArrival: "15.30",
      Description: "Kjørte svigemor til barnehagen",
      HourCount: 1,
      outlayPayment: 1000
    }
  
    {
      id: 2,
      date: "20.01.2020",
      timeDeparture: "14.30",
      timeArrival: "15.30",
      Description: "Jobbtur til bergen",
      HourCount: 16,
      outlayPayment: 1000
    }
  ];*/ return;

  dispatch({
    type: FETCH_MINE_TIMER,
    Timer: Timer
  });
};

export const RegNyeTimer = RegTimerData => dispatch => {
  console.log("RegNyeTimer svarer: " + RegTimerData);

  //Http call
  //Legg inn RegTimerDate eller response i dispatch

  return dispatch({
    type: REG_NYE_TIMER,
    payload: RegTimerData
  });
};
