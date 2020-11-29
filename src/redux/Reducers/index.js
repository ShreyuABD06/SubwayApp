import { combineReducers } from "redux";
import ProductsReducer from "./ProductsReducer";
import CartReducer from "./CartReducer";

export default combineReducers({
  productsReducerState: ProductsReducer,
  cartReducerState: CartReducer
});
