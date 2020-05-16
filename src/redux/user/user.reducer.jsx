import { UserActionTypes} from './user.types';

const INITIAL_STATE = {
    currentUser : null
};

//adding default value in case it is not passed, like on init
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case UserActionTypes.SET_CURRENT_USER:
        return {
            ...state,
            currentUser: action.payload
        }
      
      default:
        return state
    }
  }

export default userReducer;

/*actions have these two properties
{
    type: 
    payload: 
}
*/