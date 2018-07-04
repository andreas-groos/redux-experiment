import { combineReducers } from "redux";
import counter from "./counterReducer";
import ui from "./uiReducer";
import data from "./dataReducer";

export default combineReducers({
    counter,
    ui,
    data
});
