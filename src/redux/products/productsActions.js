import firebase from '../../firebase/firebaseConfig'

const databaseRef = firebase.database().ref()


const productsRef = databaseRef.child("proucts")


