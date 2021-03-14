import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { setProductDisplay } from "../actions/appActions";
import { removeFromCart } from "../actions/cartActions";

const useStyles = makeStyles({
  shoppingCartContainer: {
    minWidth: 200,
    width: "35%",
    minHeight: "100vh",
  },
});

const ShoppingCartTab = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const productsInCart = useSelector((state) => state.cartData.productsInCart);
  const productDataByID = useSelector(
    (state) => state.productData.productDataById
  );

  return (
    <Paper variant="outlined" className={classes.shoppingCartContainer}>
      {Object.keys(productsInCart).length > 0 &&
        Object.keys(productsInCart).map((cartItemKey) => {
          const productQty = productsInCart[cartItemKey];
          let productId;
          let productSize;

          if (cartItemKey.includes("_")) {
            const underscoreIndex = cartItemKey.indexOf("_");
            productId = cartItemKey.slice(0, underscoreIndex);
            productSize = cartItemKey.slice(underscoreIndex + 1);
          } else {
            productId = cartItemKey;
            productSize = null;
          }

          return (
            <div
              id="cart-product"
              key={productId}
              onClick={() => {
                dispatch(
                  setProductDisplay(
                    productId,
                    productDataByID[productId].category
                  )
                );
              }}
            >
              <div id="cart-product-image-container">
                <img
                  src={productDataByID[productId].image}
                  id="cart-product-image"
                />
              </div>
              <div id="cart-product-details">
                <p id="cart-product-title">
                  {productDataByID[productId].title}
                </p>
                {productSize && <p>Size: {productSize}</p>}
                <p>Qty: {productQty}</p>
                <p
                  onClick={(event) => {
                    dispatch(removeFromCart(cartItemKey));
                    event.stopPropagation();
                  }}
                  id="product-remove-button"
                >
                  Remove
                </p>
              </div>
            </div>
          );
        })}
    </Paper>
  );
};

export default ShoppingCartTab;
