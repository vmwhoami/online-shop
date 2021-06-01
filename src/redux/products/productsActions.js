import { GET_PRODUCTS, GET_PRODUCTS_ERROR } from './productsTypes';
import axios from '../axios';

const getAllProducts = (obj) => ({
  type: GET_PRODUCTS,
  payload: obj,
});

const getProductsError = () => ({
  type: GET_PRODUCTS_ERROR,
});

const getProducts = () => async (dispatch) => {
  try {
    const data = await axios.get('/products.json');
    dispatch(getAllProducts(data));
  } catch (err) {
    dispatch(getProductsError());
  }

  // products.on('value', snapshot => dispatch(getAllProducts(snapshot.val() || {})))
};

export default getProducts;
