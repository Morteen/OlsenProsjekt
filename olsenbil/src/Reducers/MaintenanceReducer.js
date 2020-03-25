import {
  REG_MAINTENANCE,
  FETCH_MAINTENANCE,
  DELETE_MAINTENANCE,
  EDIT_MAINTENANCE
} from "../Client/actions/types";
import FyllingReducer from "./FyllingReducer";
const initialState = {
  MaintenaceHistory: [
    {
      id: 0,
      regNumber: "Dl40987",
      date: "21.03.2020",
      km: "2220222",
      Description: "Skifte av registerreim",
      price: "10000"
    }
  ],
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
    case FETCH_MAINTENANCE:
      return {
        ...state,
        MaintenaceHistory: state.MaintenaceHistory
      };

    case DELETE_MAINTENANCE:
      console.log(
        "DeleteMaintenance id i reducer " + JSON.stringify(action.payload)
      );
      let testArray = state.MaintenaceHistory;
      console.log(
        "Log av MaintenaceHistory i reducer etter delete: " +
          JSON.stringify(state.MaintenaceHistory)
      );
      console.log("Log av testArray i reducer" + JSON.stringify(testArray));
      testArray.splice(action.payload, 1); //slice(0, action.payload);
      console.log(
        "Log av testArray i reducer etter slice" + JSON.stringify(testArray)
      );
      return {
        ...state,
        MaintenaceHistory: testArray
      };

    case EDIT_MAINTENANCE:
      console.log(
        "Log av payload i EDIT_MAINTENANCE reducer" +
          JSON.stringify(action.payload)
      );
      let tempArray = state.MaintenaceHistory;
      tempArray[action.payload.id] = action.payload;
      return {
        ...state,
        MaintenaceHistory: tempArray
      };

    default:
      return state;
  }
}
