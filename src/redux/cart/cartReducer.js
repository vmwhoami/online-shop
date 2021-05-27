import CART_SWITCH from './cartTypes';

const initial = {
  cart: false,
};

const cartReducer = (state = initial, action) => {
  switch (action.type) {
    case CART_SWITCH:
      return {
        ...state, cart: !state.cart,
      };
    default:
      return state;
  }
};
export default cartReducer;
