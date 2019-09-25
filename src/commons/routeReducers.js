import { combineReducers } from "redux";

/* ROUTE_INJECT_IMPORT */
import HomeReducer from 'Features/Home/Redux/HomeReducer';

export default combineReducers({
  /* ROUTE_INJECT_EXPORT */
	Home:HomeReducer,
})