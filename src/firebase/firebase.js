import * as firebase from 'firebase'
import firebaseConfig from './firebaseConfig';
import 'firebase/database';

let firebaseConfig = firebase.initializeApp(firebaseConfig)

export default firebaseConfig