import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import componentsListReducer from "./slices/componentsListSlice";

const rootReducer = combineReducers({
    componentsList: componentsListReducer,
});

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
