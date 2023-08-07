import { combineReducers } from "redux";
import { todoReducer } from "./todoapp/reducers/todoReducer";

export const rootReducer = combineReducers({
    todoReducer
})