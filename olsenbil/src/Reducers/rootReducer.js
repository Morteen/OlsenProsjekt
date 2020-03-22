import { combineReducers } from "redux";
//import flashMessages from "./FlashMessages";
//import auth from "./auth";
import loginReducer from "./loginReducer";
import Timelistereducer from "./Timelistereducer";
import FyllingReducer from "./FyllingReducer";
import MaintenanceReducer from "./MaintenanceReducer";

export default combineReducers({
  loginReducer,
  Timelistereducer,
  FyllingReducer,
  MaintenanceReducer

  //flashMessages,
  //auth
});
