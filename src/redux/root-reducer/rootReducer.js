import { combineReducers } from 'redux';

import userReducer from '../reducers/user/user.reducer';
import cartReducer from '../reducers/cart/cart.reducer';
import catergoryReducer from '../reducers/catergory/catergory.reducer';
import shopReducer from '../reducers/shop/shop.reducer';

export default combineReducers({
	user: userReducer,
	cart: cartReducer,
	catergory: catergoryReducer,
	shop: shopReducer
});
