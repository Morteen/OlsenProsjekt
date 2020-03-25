import {
  FETCH_MINE_TIMER,
  REG_NYE_TIMER,
  DELETE_TIMER,
  EDIT_TIMER
} from "./types";

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

export const handleDeleteTimer = DelTimerData => dispatch => {
  console.log("handleDeleteTimer svarer: " + DelTimerData);

  //Http call
  //Legg inn RegTimerDate eller response i dispatch

  return dispatch({
    type: DELETE_TIMER,
    payload: DelTimerData
  });
};
export const handleEditTimer = editTimerData => dispatch => {
  console.log("handleDeleteTimer svarer: " + editTimerData);

  //Http call
  //Legg inn editTimerDate eller response i dispatch

  return dispatch({
    type: EDIT_TIMER,
    payload: editTimerData //Payload fra http req
  });
};

//handleDeleteTimer
