import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCategoriesListDisplay,
  setProductDisplay,
} from "../actions/appActions";
import "fontsource-roboto";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import CardTemplate from "./CardTemplate";

const useStyles = makeStyles({
  cardDiv: {
    width: "20%",
    maxWidth: 200,
    margin: 4,
    textAlign: "center",
    listStyleType: "none",
  },
  media: {
    height: 200,
    width: "90%",
    backgroundSize: "contain",
    margin: "5px auto",
  },
  label: {
    fontWeight: "bold",
  },
  spinner: {
    marginTop: 90,
  },
  title: {
    fontSize: 20,
    textTransform: "capitalize",
  },
});

const ProductsList = () => {
  const productDataByCategory = useSelector(
    (state) => state.productData.productDataByCategory
  );
  const selectedCategoryName = useSelector(
    (state) => state.appData.selectedCategoryName
  );
  const dispatch = useDispatch();
  const classes = useStyles();
  const selectedCategoryData = productDataByCategory[selectedCategoryName];

  return (
    <>
      <h2 className={classes.title}>{selectedCategoryName}</h2>
      <div id="cards-container">
        {selectedCategoryData.map((productData) => {
          return (
            <CardTemplate
              title={productData.title}
              imageURL={productData.image}
              clickHandler={() =>
                dispatch(
                  setProductDisplay(productData.id, productData.category)
                )
              }
            />
          );
        })}
      </div>
      <Button
        variant="outlined"
        onClick={() => dispatch(setCategoriesListDisplay())}
      >
        Back
      </Button>
    </>
  );
};

export default ProductsList;
