import {createSelector} from 'reselect';

//input selector, only returns a piece of the state
const selectCart = state => state.cart;

//output selector
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

//total quanity of cart items
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
      cartItems.reduce(
        (accumalatedQuantity, cartItem) =>
          accumalatedQuantity + cartItem.quantity,
        0
      )
  );

  export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
  );

  export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
      cartItems.reduce(
        (accumalatedQuantity, cartItem) =>
          accumalatedQuantity + cartItem.quantity * cartItem.price,
        0
      )
  );