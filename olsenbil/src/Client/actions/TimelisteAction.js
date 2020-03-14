import { FETCH_MINE_TIMER, REG_NYE_TIMER } from "./types";

export const fetchMineTimer = () => dispatch => {
  console.log("FetchTimer svarer når siden blir lastet");
  const Timer = [];
  return;

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
