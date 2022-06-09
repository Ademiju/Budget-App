import { combineReducers } from "redux";
import { budgetReducer } from "./budget";

const reducerObject = { budgetReducer: budgetReducer };

const reducer = combineReducers({ ...reducerObject});

export default reducer