import { combineReducers } from 'redux';
import productsReducer from './products/productsReducer';
import uiReducer from './ui/uiReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({ productsReducer, uiReducer, userReducer });

export default rootReducer;
