import { combineReducers } from "redux";
import contactReducer from "./contactReducer";

// Object with all the reducers
export default combineReducers({
  contact: contactReducer
});
