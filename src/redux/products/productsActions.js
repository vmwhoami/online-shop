import firebase from '../../firebase/firebaseConfig'
import GET_PRODUCTS from './productsTypes'
import 'firebase/database';
import axios from 'axios'


const getAllProducts = (obj) => ({
  type: GET_PRODUCTS,
  payload: obj
})

const getProducts = () => async (dispatch) => {
  try {
    const data = await axios.get('https://project-1b917-default-rtdb.europe-west1.firebasedatabase.app/products.json')
    dispatch(getAllProducts(data))
  } catch (err) {
    console.log(err)
  }

  // products.on('value', snapshot => dispatch(getAllProducts(snapshot.val() || {})))
}

export default getProducts