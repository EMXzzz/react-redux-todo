import { combineReducers } from "redux";
import { todoReducer } from "./todo-reducer";
import { userReducer } from "./use-reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer,
})

export type RootState = ReturnType<typeof rootReducer>
