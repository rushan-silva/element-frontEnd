import { combineReducers } from "redux";
import chartReducer from "./chartReducer";
import successReducer from "./successReducer";
import suggestionReducer from "./suggestionReducer";

export default combineReducers({
  charts: chartReducer,
  success: successReducer,
  suggestion: suggestionReducer
});
