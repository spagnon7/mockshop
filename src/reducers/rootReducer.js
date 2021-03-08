import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer";
import { appReducer } from "./appReducer";
import { cartReducer } from "./cartReducer";

const rootReducer = combineReducers({
  productData: productsReducer,
  appData: appReducer,
  cartData: cartReducer,
});

export { rootReducer };
