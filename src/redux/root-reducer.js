//combines all of the state into one spot

import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers(
    {
        user: userReducer,
        cart: cartReducer
    }
);

