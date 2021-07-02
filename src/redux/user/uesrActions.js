import firebase from '../../firebase/firebase.utils';
import {
  LOGIN_USER, LOGOUT_USER, REGISTER_USER, USER_ERROR,
} from './userTypes';

const errorsUser = (error) => ({
  type: USER_ERROR,
  payload: error,
});
const loginUser = (user) => ({
  type: LOGIN_USER,
  payload: user,
});

const logOutUser = () => ({
  type: LOGOUT_USER,
  payload: false,
});

const registerUser = (user) => ({
  type: REGISTER_USER,
  payload: user,
});

const signIn = (user) => async (dispatch) => {
  const { email, password } = user;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const { user } = userCredential;
      dispatch(loginUser(user));
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      dispatch(errorsUser({ errorCode, errorMessage }));
    });
};

const register = (user) => async (dispatch) => {
  const { email, password } = user;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => userCredential.user)
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      dispatch(errorsUser({ errorCode, errorMessage }));
    });
};

const signOut = () => async (dispatch) => {
  firebase.auth().signOut().then(() => dispatch(logOutUser()))
    .catch((error) => {
      dispatch(errorsUser({ error }));
    });
};

export {
  loginUser, signIn, logOutUser, register, registerUser, signOut,
};
