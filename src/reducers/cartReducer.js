import { TOGGLE_CART_TAB } from "../actions/cartActionTypes";

const initialCartState = {
  isCartTabDisplayed: false,
};

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case TOGGLE_CART_TAB:
      return {
        ...state,
        isCartTabDisplayed: action.payload,
      };
    default:
      return state;
  }
};

export { cartReducer };
