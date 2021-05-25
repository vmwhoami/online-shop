import * as firebase from "firebase";
const { REACT_APP_API_KEY, REACT_APP_PROJECT_ID, REACT_APP_MESSEGING_SENDER_ID, REACT_APP_APP_ID } = process.env
const config = {
  apiKey: REACT_APP_API_KEY,
  authDomain: `${REACT_APP_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${REACT_APP_PROJECT_ID}-default-rtdb.firebaseio.com/`,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: `${REACT_APP_PROJECT_ID}.appspot.com`,
  messagingSenderId: REACT_APP_MESSEGING_SENDER_ID,
  appId: `${REACT_APP_APP_ID}`
};


let firebaseConfig = firebase.initializeApp(config);
export default firebaseConfig;