import {
  TOGGLE_CART_TAB,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "./cartActionTypes";

const toggleCartTab = (currentCartTabDisplay) => {
  return {
    type: TOGGLE_CART_TAB,
    payload: !currentCartTabDisplay,
  };
};

const addToCart = (addedProductDetails) => {
  return {
    type: ADD_TO_CART,
    addedProductDetails,
  };
};

export { toggleCartTab, addToCart };
