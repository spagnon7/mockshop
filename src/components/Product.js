import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { setProductsListDisplay } from "../actions/appActions";
import { addToCart } from "../actions/cartActions";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  sizeSelector: {
    minWidth: 50,
    marginRight: 20,
  },
  quantitySelector: {
    minWidth: 50,
  },
  addToCartButton: {
    display: "block",
    marginTop: "15px",
  },
}));

const Product = () => {
  const dispatch = useDispatch();
  const selectedCategoryName = useSelector(
    (state) => state.appData.selectedCategoryName
  );
  const selectedProductId = useSelector(
    (state) => state.appData.selectedProductId
  );
  const productDataById = useSelector(
    (state) => state.productData.productDataById
  );
  const selectedProductData = productDataById[selectedProductId];

  const classes = useStyles();
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(null);

  const handleSizeSelectionChange = (event) => {
    setSelectedSize(event.target.value);
  };
  const handleQuantitySelectionChange = (event) => {
    setSelectedQuantity(event.target.value);
  };

  let quantitySelectorOptions = [];
  const setQuantitySelectorExtent = (quantitySelectorExtent) => {
    for (let i = 1; i <= quantitySelectorExtent; i++) {
      quantitySelectorOptions.push(i);
    }
  };
  setQuantitySelectorExtent(10);

  let isClothingProduct;
  if (selectedCategoryName.indexOf("clothing") >= 0) {
    isClothingProduct = true;
  } else {
    isClothingProduct = false;
  }

  const productDataForCart = {
    id: selectedProductId,
    size: selectedSize,
    qty: selectedQuantity,
  };

  return (
    <>
      <div id="product-container">
        <img src={selectedProductData.image} id="product-image" />
        <div id="product-details">
          <h2>{selectedProductData.title}</h2>
          <p>{selectedProductData.description}</p>
          <p id="product-price">Price: ${selectedProductData.price}</p>
          {isClothingProduct && (
            <FormControl className={classes.sizeSelector}>
              <InputLabel shrink>Size</InputLabel>
              <Select value={selectedSize} onChange={handleSizeSelectionChange}>
                <MenuItem value={"S"}>S</MenuItem>
                <MenuItem value={"M"}>M</MenuItem>
                <MenuItem value={"L"}>L</MenuItem>
                <MenuItem value={"XL"}>XL</MenuItem>
              </Select>
            </FormControl>
          )}
          <FormControl className={classes.quantitySelector}>
            <InputLabel shrink>Quantity</InputLabel>
            <Select
              value={selectedQuantity}
              onChange={handleQuantitySelectionChange}
            >
              {quantitySelectorOptions.map((quantityOption) => {
                return (
                  <MenuItem value={quantityOption}>{quantityOption}</MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <Button
            className={classes.addToCartButton}
            variant="contained"
            color="primary"
            onClick={() => dispatch(addToCart(productDataForCart))}
          >
            Add to Cart
          </Button>
        </div>
      </div>
      {selectedCategoryName && (
        <Button
          variant="outlined"
          onClick={() => dispatch(setProductsListDisplay(selectedCategoryName))}
        >
          Back
        </Button>
      )}
    </>
  );
};

export default Product;
