import {combineReducers} from "redux"; 
import chartReducer from "./chartReducer";

export default combineReducers({
    charts:chartReducer
});