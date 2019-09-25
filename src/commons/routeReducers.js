import { combineReducers } from "redux";

/* PLOP_INJECT_IMPORT */
import ForgotAkunReducer from 'Features/ForgotAkun/Redux/ForgotAkunReducer';
import ForgotPasswordReducer from 'Features/ForgotPassword/Redux/ForgotPasswordReducer';
import OrderReducer from 'Features/Order/Redux/OrderReducer';
import HomeReducer from 'Features/Home/Redux/HomeReducer';

export default combineReducers({
  /* PLOP_INJECT_EXPORT */
	ForgotAkun:ForgotAkunReducer,
	ForgotPassword:ForgotPasswordReducer,
	Order:OrderReducer,
	Home:HomeReducer,
})