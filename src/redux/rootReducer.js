import { combineReducers } from 'redux';
import productsReducer from './products/productsReducer';
import cartReducer from './cart/cartReducer';

const rootReducer = combineReducers({ productsReducer, cartReducer });

export default rootReducer;
