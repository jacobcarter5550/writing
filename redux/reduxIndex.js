import { combineReducers } from "redux";
import reducer from "./reducer";
import userList from "./userList"

const reducers = combineReducers({
    total : reducer,
    list: userList,
})


export default reducers