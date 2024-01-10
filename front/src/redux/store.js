import { createStore, compose, applyMiddleware } from 'redux';
import countReducer from './reducers/counterReducer';
import {thunk} from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(countReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
