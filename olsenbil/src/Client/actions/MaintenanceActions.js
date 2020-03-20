import { REG_MAINTENANCE } from "../actions/types";

export const RegNewMaintenance = MaintenanceData => dispatch => {
  console.log("ReFueling svarer: " + MaintenanceData);

  //Http call
  //Legg inn RegReFuling eller response i dispatch

  return dispatch({
    type: REG_MAINTENANCE,
    payload: MaintenanceData
  });
};
