import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/counterReducer";

// Combine your reducers if you have more than one
const rootReducer = combineReducers({
  counter: counterReducer.reducer,
});

// Create the store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
