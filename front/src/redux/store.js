import { createStore, compose, combineReducers } from 'redux';
import countReducer from './reducers/counterReducer';

// Add more reducers if needed
// import anotherReducer from './reducers/anotherReducer';

const rootReducer = combineReducers({
  counter: countReducer,
  // Add more reducers here
  // another: anotherReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,composeEnhancers());

export default store;
