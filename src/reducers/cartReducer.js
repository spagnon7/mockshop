import {
  TOGGLE_CART_TAB,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../actions/cartActionTypes";

const initialCartState = {
  isCartTabDisplayed: false,
  productsInCart: {},
};

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case TOGGLE_CART_TAB:
      return {
        ...state,
        isCartTabDisplayed: action.payload,
      };
    case ADD_TO_CART:
      const productId = action.addedProductDetails.id;
      const productQty = action.addedProductDetails.qty;
      const productSize = action.addedProductDetails.size;
      const cartItemKey = productId + "_" + productSize;
      const previousCartItemQty = state.productsInCart[cartItemKey];

      return {
        ...state,
        productsInCart: {
          ...state.productsInCart,
          [cartItemKey]: previousCartItemQty
            ? previousCartItemQty + productQty
            : productQty,
        },
      };

    default:
      return state;
  }
};

export { cartReducer };
