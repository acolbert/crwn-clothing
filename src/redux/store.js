import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist'; // browser caches the store depending on config
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';

const middlewares = [thunk];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store); // a persited version of our store

export default {store, persistor};