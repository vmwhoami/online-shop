import { CART_SWITCH, LOGIN_SWITCH } from './uiTypes';

const switchCart = () => ({
  type: CART_SWITCH,
});

const switchLogin = () => ({
  type: LOGIN_SWITCH,
});

export { switchCart, switchLogin };
