import { combineReducers } from "redux";
import AuthReducer from "./auth";
import InitReducer from "./init";

const rootReducer = combineReducers({
  auth: AuthReducer,
  init: InitReducer,
  forgetpassword:AuthReducer,
});

export default rootReducer;
