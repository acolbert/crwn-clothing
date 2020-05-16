import { CartActionTypes} from './cart.types';

//payload is optional, we are not using it here
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});