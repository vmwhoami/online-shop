import {
  CART_SWITCH, LOGIN_SWITCH, SUBSCRIPTION_SWITCH, REGISTER_SWITCH,
} from './uiTypes';

const initial = {
  cart: false,
  loginInput: false,
  registerInput: false,
  subscribed: false,

};

const uiReducer = (state = initial, action) => {
  switch (action.type) {
    case CART_SWITCH:
      return {
        ...state, cart: !state.cart,
      };
    case REGISTER_SWITCH:
      return {
        ...state, registerInput: !state.registerInput,
      };
    case LOGIN_SWITCH:
      return {
        ...state, loginInput: !state.loginInput,
      };
    case SUBSCRIPTION_SWITCH:
      return {
        ...state, subscribed: !state.subscribed,
      };
    default:
      return state;
  }
};
export default uiReducer;
