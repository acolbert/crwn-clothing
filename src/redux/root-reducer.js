//combines all of the state into one spot

import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // this is local storage on browser

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
    key: 'root', //where to start saving at on the reducer
    storage,
    whitelist: ['cart'] //string name of all of the reducers we want to persist
};

const rootReducer =  combineReducers(
    {
        user: userReducer,
        cart: cartReducer,
        directory: directoryReducer,
        shop: shopReducer
    }
);

export default persistReducer(persistConfig, rootReducer);

