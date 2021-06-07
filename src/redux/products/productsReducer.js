import { GET_PRODUCTS, GET_PRODUCTS_ERROR, GET_A_PRODUCT } from './productsTypes';

const initial = {
  products: null,
  loading: true,
  errors: false,
  singleProduct: null,
};

const productsReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state, errors: false, products: action.payload, loading: false,
      };
    case GET_A_PRODUCT:
      return {
        ...state, errors: false, singleProduct: action.payload, loading: false,
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
