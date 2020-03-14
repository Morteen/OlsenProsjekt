import { REG_REFULING } from "./types";

export const RegReFuling = RegReFulingData => dispatch => {
  console.log("ReFueling svarer: " + RegReFulingData);

  //Http call
  //Legg inn RegReFuling eller response i dispatch

  return dispatch({
    type: REG_REFULING,
    payload: RegReFulingData
  });
};
