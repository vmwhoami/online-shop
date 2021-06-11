import { LOGIN_USER, LOGOUT_USER } from './userTypes';

const initial = {
  currentUser: null,
  loggedIn: false,
};

const userReducer = (state = initial, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state, currentUser: action.payload, loggedIn: true,
      };
    case LOGOUT_USER:
      return {
        ...state, currentUser: null, loggedIn: false,
      };
    default:
      return state;
  }
};
export default userReducer;
