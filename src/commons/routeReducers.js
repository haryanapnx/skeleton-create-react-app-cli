import { combineReducers } from "redux";

/* ROUTE_INJECT_IMPORT */
import AuthReducer from 'Features/Auth/Redux/AuthReducer';
import HomeReducer from 'Features/Home/Redux/HomeReducer';

export default combineReducers({
  /* ROUTE_INJECT_EXPORT */
	Auth:AuthReducer,
	Home:HomeReducer,
})