import GET_PRODUCTS from './productsTypes';

const initial = {
  products: null,
  errors: false,
};

const productsReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state, errors: false,
      };

    default:
      return state;
  }
};
export default productsReducer;
