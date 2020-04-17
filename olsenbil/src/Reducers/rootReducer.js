import { combineReducers } from "redux";
//import flashMessages from "./FlashMessages";
//import auth from "./auth";
import loginReducer from "./loginReducer";
import Timelistereducer from "./Timelistereducer";
import FyllingReducer from "./FyllingReducer";
import MaintenanceReducer from "./MaintenanceReducer";
import UserReducer from "./UserReducer";
import ModalReducer from "./ModalReducer";

export default combineReducers({
  loginReducer,
  Timelistereducer,
  FyllingReducer,
  MaintenanceReducer,
  UserReducer,
  ModalReducer,

  //flashMessages,
  //auth
});
