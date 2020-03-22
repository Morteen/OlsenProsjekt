import { REG_MAINTENANCE, FETCH_MAINTENANCE } from "../Client/actions/types";
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
        MaintenaceHistory: action.payload,
        TotalSum: (state.MyStats.TotalSum =
          state.MyStats.TotalSum + parseInt(action.payload.price)), //Legger til vedlikeholds kostnader i totalsummen
        totalMaintenanceCost: (state.totalMaintenanceCost += parseInt(
          action.payload.price
        ))
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
