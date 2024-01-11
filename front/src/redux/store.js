import { createStore, compose, applyMiddleware } from "redux";
import countReducer from "./reducers/counterReducer";
import { thunk } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(countReducer, composeEnhancers(applyMiddleware(thunk)));
const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export default store;
