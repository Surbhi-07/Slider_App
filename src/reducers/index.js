import { combineReducers } from "redux";
import slideReducer from "./sliderReducer";

const rootReducer = combineReducers({ slideReducer });

export default rootReducer;