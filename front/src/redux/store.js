import { createStore, compose } from 'redux';
import countReducer from './reducers/counterReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(countReducer, composeEnhancers());

export default store;
