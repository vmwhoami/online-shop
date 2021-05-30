import axios from 'axios';
import { firebase } from '../firebase/firebaseConfig'
import '@react-firebase/auth';
// const getToken = async () => {
//   const token = await firebase.auth().currentUser.getIdToken()
//   console.log(token);
// }

// getToken()
const axio = axios.create({ baseURL: 'https://project-1b917-default-rtdb.europe-west1.firebasedatabase.app' });

export default axio;
