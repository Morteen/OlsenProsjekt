import { REG_MAINTENANCE, FETCH_MAINTENANCE } from "../actions/types";

export const RegNewMaintenance = MaintenanceData => dispatch => {
  console.log("RegNewMaintenance svarer: " + MaintenanceData);

  //Http call
  //Legg inn RegReFuling eller response i dispatch

  return dispatch({
    type: REG_MAINTENANCE,
    payload: MaintenanceData
  });
};
export const fetchMaintenanceHistory = () => dispatch => {
  console.log("fetchMaintenanceHistor svarer: ");

  //Http call
  //Legg inn fetchMaintenanceHistory eller response i dispatch

  return dispatch({
    type: FETCH_MAINTENANCE,
    payload: {
      regNumber: "Dl40987",
      date: "21.03.2020",
      km: "2220222",
      Description: "Skifte av registerreim",
      price: "10000"
    }
  });
};
