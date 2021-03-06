import { GET_PRODUCTS, GET_PRODUCTS_ERROR, GET_A_PRODUCT } from './productsTypes';
import axios from '../axios';

const getAllProducts = (obj) => ({
  type: GET_PRODUCTS,
  payload: obj,
});
const getProduct = (obj) => ({
  type: GET_A_PRODUCT,
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
};

const getAProduct = () => async (dispatch) => {
  try {
    const data = await axios.get('/products.json');
    dispatch(getProduct(data));
  } catch (err) {
    dispatch(getProductsError());
  }
};

export { getProducts, getAProduct };
