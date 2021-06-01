import { GET_PRODUCTS, GET_PRODUCTS_ERROR } from './productsTypes';

const initial = {
  products: null,
  loading: true,
  errors: false,
};

const productsReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state, errors: false, products: action.payload, loading: false,
      };
    case GET_PRODUCTS_ERROR:
      return {
        ...state, errors: true, products: action.payload, loading: false,
      };
    default:
      return state;
  }
};
export default productsReducer;
