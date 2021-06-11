import { firebase } from '../../firebase/firebase.utils';
import { LOGIN_USER, LOGOUT_USER } from './userTypes';

const loginUser = (user) => ({
  type: LOGIN_USER,
  payload: user,
});

const logOutUser = () => ({
  type: LOGOUT_USER,
});

const signIn = (user) => {
  const { email, password } = user;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => userCredential.user)
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
};

export { loginUser, signIn, logOutUser };
