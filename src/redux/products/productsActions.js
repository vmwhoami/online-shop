import axios from 'axios';

import 'firebase/database';
import GET_PRODUCTS from './productsTypes';
let copy = axios.create({ baseURL: 'https://project-1b917-default-rtdb.europe-west1.firebasedatabase.app' });
const getAllProducts = (obj) => ({
  type: GET_PRODUCTS,
  payload: obj,
});

const getProducts = () => async (dispatch) => {
  try {
    let data = await copy.get("/products.json")
    dispatch(getAllProducts(data));
  } catch (err) {
    console.error(err);
  }

  // products.on('value', snapshot => dispatch(getAllProducts(snapshot.val() || {})))
};

export default getProducts;
