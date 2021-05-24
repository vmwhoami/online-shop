import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: process.env.API_KEY,
  databaseURL: `https://${process.env.PROJECT_ID}-default-rtdb.firebaseio.com/`,
  projectId: process.env.PROJECT_ID
}

const initFirebase = () => {
  if (!firebase.app.length) {
    firebase.initializeApp(config)
  }
}

initFirebase()

export { firebase }