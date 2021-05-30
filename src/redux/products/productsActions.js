import GET_PRODUCTS from './productsTypes';
import axios from '../axios';

const getAllProducts = (obj) => ({
  type: GET_PRODUCTS,
  payload: obj,
});

const getProducts = () => async (dispatch) => {
  try {
    const data = await axios.get('/products.json');
    dispatch(getAllProducts(data));
  } catch (err) {
    console.error(err);
  }

  // products.on('value', snapshot => dispatch(getAllProducts(snapshot.val() || {})))
};

export default getProducts;
