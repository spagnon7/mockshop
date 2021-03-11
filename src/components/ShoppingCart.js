import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  shoppingCartContainer: {
    minWidth: 200,
    width: "35%",
  },
});

const ShoppingCartTab = () => {
  const classes = useStyles();
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
            <div>
              <img
                src={productDataByID[productId].image}
                id="cart-product-image"
              />
              <p>{productDataByID[productId].title}</p>
              {productSize && <p>Size: {productSize}</p>}
              <p>Quantity: {productQty}</p>
              <p>Remove</p>
            </div>
          );
        })}
    </Paper>
  );
};

export default ShoppingCartTab;
