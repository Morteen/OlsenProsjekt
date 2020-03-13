import { combineReducers } from "redux";
//import flashMessages from "./FlashMessages";
//import auth from "./auth";
import loginReducer from "./loginReducer";
import Timelistereducer from "./Timelistereducer";

export default combineReducers({
  loginReducer,
  Timelistereducer

  //flashMessages,
  //auth
});
