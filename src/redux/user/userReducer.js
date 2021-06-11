import {
  LOGIN_USER, LOGOUT_USER, REGISTER_USER, USER_ERROR,
} from './userTypes';

const initial = {
  currentUser: null,
  loggedIn: false,
  error: {},
};

const userReducer = (state = initial, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state, currentUser: action.payload, loggedIn: true,
      };
    case REGISTER_USER:
      return {
        ...state, currentUser: action.payload, loggedIn: false,
      };
    case LOGOUT_USER:
      return {
        ...state, currentUser: null, loggedIn: false,
      };
    case USER_ERROR:
      return {
        ...state, error: action.payload,
      };

    default:
      return state;
  }
};
export default userReducer;
