import { combineReducers } from "redux";
import cartReducer from "./cartReducers";
import discountReducer from "./discountReducer";
export default combineReducers({
  cartReducer,
  discountReducer,
});
