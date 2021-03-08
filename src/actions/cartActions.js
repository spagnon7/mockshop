import { TOGGLE_CART_TAB } from "./cartActionTypes";

const toggleCartTab = (currentCartTabDisplay) => {
  return {
    type: TOGGLE_CART_TAB,
    payload: !currentCartTabDisplay,
  };
};

export { toggleCartTab };
