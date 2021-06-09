import { combineReducers } from 'redux';
import productsReducer from './products/productsReducer';
import uiReducer from './ui/uiReducer';

const rootReducer = combineReducers({ productsReducer, uiReducer });

export default rootReducer;
