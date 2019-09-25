import { combineReducers } from "redux";

/* PLOP_INJECT_IMPORT */
import OrderReducer from 'Features/Order/Redux/OrderReducer';
import HomeReducer from 'Features/Home/Redux/HomeReducer';

export default combineReducers({
  /* PLOP_INJECT_EXPORT */
	Order:OrderReducer,
	Home:HomeReducer,
})