//combines all of the state into one spot

import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';

export default combineReducers(
    {
        user: userReducer
    }
);

