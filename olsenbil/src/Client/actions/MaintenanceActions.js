import {
  REG_MAINTENANCE,
  FETCH_MAINTENANCE,
  DELETE_MAINTENANCE,
  EDIT_MAINTENANCE
} from "../actions/types";

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
  const MaintenaceHistory = [];
  //Http call
  //Legg inn fetchMaintenanceHistory eller response i dispatch

  return dispatch({
    type: FETCH_MAINTENANCE,
    MaintenaceHistory: MaintenaceHistory
  });
};

export const handleDeleteMaintenance = DelMaintenanceData => dispatch => {
  console.log("handleDeleteTimer svarer: " + DelMaintenanceData);

  //Http call
  //Legg inn RegTimerDate eller response i dispatch

  return dispatch({
    type: DELETE_MAINTENANCE,
    payload: DelMaintenanceData
  });
};

export const handleEditMaintenance = editMaintenanceData => dispatch => {
  console.log(
    "Log av handleEditMaintenanc: " + JSON.stringify(editMaintenanceData)
  );

  //Http call
  //Legg inn RegTimerDate eller response i dispatch

  return dispatch({
    type: EDIT_MAINTENANCE,
    payload: editMaintenanceData
  });
};
