import axios from 'axios';
// import firebase from '../../firebase/firebaseConfig';

// import 'firebase/database';
import GET_PRODUCTS from './productsTypes';

const getAllProducts = (obj) => ({
  type: GET_PRODUCTS,
  payload: obj,
});

const getProducts = () => async (dispatch) => {
  try {
    const data = await axios.get('https://online-shop-8cd76-default-rtdb.firebaseio.com/categories.json');
    dispatch(getAllProducts(data));
  } catch (err) {
    console.error(err);
  }

  // products.on('value', snapshot => dispatch(getAllProducts(snapshot.val() || {})))
};

export default getProducts;
