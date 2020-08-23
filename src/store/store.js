import { createStore ,applyMiddleware } from 'redux';
import logger from 'redux-logger';

import reducer from './reducers/auth.js';

import Redux from "redux-thunk" 

const middlewares = [logger];

const store = createStore (reducer,applyMiddleware(...middlewares,Redux))

export default store;