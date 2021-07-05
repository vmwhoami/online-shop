import {
  CART_SWITCH, LOGIN_SWITCH, SUBSCRIPTION_SWITCH, REGISTER_SWITCH,
} from './uiTypes';

const switchCart = () => ({
  type: CART_SWITCH,
});

const switchLogin = () => ({
  type: LOGIN_SWITCH,
});

const switchRegister = () => ({
  type: REGISTER_SWITCH,
});
const switchSubscribed = () => ({
  type: SUBSCRIPTION_SWITCH,
});

export {
  switchCart, switchLogin, switchSubscribed, switchRegister,
};
