import { CART_SWITCH, LOGIN_SWITCH } from './uiTypes';

const initial = {
  cart: false,
  loginInput: false,
};

const uiReducer = (state = initial, action) => {
  switch (action.type) {
    case CART_SWITCH:
      return {
        ...state, cart: !state.cart,
      };
    case LOGIN_SWITCH:
      return {
        ...state, loginInput: !state.loginInput,
      };
    default:
      return state;
  }
};
export default uiReducer;
