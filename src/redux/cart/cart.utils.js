//cartItems is all of the items currently in cart
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );
  
    if (existingCartItem) {
        //returns a new array
      return cartItems.map(cartItem =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    //if it is a new item, add quantity
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  };


  export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToRemove.id
    );
  
    if (existingCartItem.quantity === 1) {
        //returns a new array without cartItemToRemove
      return cartItems.filter(cartItem =>
        cartItem.id !== cartItemToRemove.id
        );
    }
  
    //if it is a new item, add quantity
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };