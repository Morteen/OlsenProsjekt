import { REG_REFULING, REG_OILFILLING, REG_ADBLUEFILLING } from "./types";

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

export const RegAdblueFill = RegAdblueFillData => dispatch => {
  console.log("ReFueling svarer: " + RegAdblueFillData);

  //Http call
  //Legg inn RegAdblueFill eller response i dispatch

  return dispatch({
    type: REG_ADBLUEFILLING,
    payload: RegAdblueFillData
  });
};
