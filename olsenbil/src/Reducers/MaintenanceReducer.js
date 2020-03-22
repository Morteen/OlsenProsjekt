import { REG_MAINTENANCE, FETCH_MAINTENANCE } from "../Client/actions/types";
import FyllingReducer from "./FyllingReducer";
const initialState = {
  MaintenaceHistory: [],
  myMaintenace: {},
  totalMaintenanceCost: ""
};
export default function(state = initialState, action) {
  console.log(
    "Log fra MaintenanceReducer: " +
      JSON.stringify(action.payload) +
      " Action type: " +
      action.type
  );
  switch (action.type) {
    case REG_MAINTENANCE:
      return {
        ...state,
        MaintenaceHistory: state.MaintenaceHistory.concat(action.payload)
      };
    case FETCH_MAINTENANCE: {
      console.log("Log av FETCH_MAINTENANCE" + JSON.stringify(state.MyStats));

      return {
        ...state,
        MaintenaceHistory: action.payload
      };
    }

    default:
      return state;
  }
  console.log(
    "Log av  myMaintenace i reduser: " + state.MaintenanceReducer.myMaintenace
  );
}
