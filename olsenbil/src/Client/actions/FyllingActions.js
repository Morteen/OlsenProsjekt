import { REG_REFULING, REG_OILFILLING } from "./types";

export const RegReFuling = RegReFulingData => dispatch => {
  console.log("ReFueling svarer: " + RegReFulingData);

  //Http call
  //Legg inn RegReFuling eller response i dispatch

  return dispatch({
    type: REG_REFULING,
    payload: RegReFulingData
  });
};
export const RegOilFill = RegOilFillData => dispatch => {
  console.log("ReFueling svarer: " + RegOilFillData);

  //Http call
  //Legg inn RegOilFilleller response i dispatch

  return dispatch({
    type: REG_OILFILLING,
    payload: RegOilFillData
  });
};
