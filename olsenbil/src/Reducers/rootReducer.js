import { combineReducers } from "redux";
//import flashMessages from "./FlashMessages";
//import auth from "./auth";
import loginReducer from "./loginReducer";
import Timelistereducer from "./Timelistereducer";
import FyllingReducer from "./FyllingReducer";

export default combineReducers({
  loginReducer,
  Timelistereducer,
  FyllingReducer

  //flashMessages,
  //auth
});
