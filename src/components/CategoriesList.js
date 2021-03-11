import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProductsListDisplay } from "../actions/appActions";
import "fontsource-roboto";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import CardTemplate from "./CardTemplate";

const useStyles = makeStyles({
  spinner: {
    marginTop: 90,
  },
});

const CategoriesList = () => {
  const productDataByCategory = useSelector(
    (state) => state.productData.productDataByCategory
  );
  const error = useSelector((state) => state.productData.error);
  const dispatch = useDispatch();
  const classes = useStyles();

  if (productDataByCategory) {
    return (
      <div id="category-cards-container">
        <div id="cards-container">
          {Object.keys(productDataByCategory).map((categoryName) => {
            return (
              <CardTemplate
                title={categoryName}
                imageURL={productDataByCategory[categoryName][0]["image"]}
                clickHandler={() =>
                  dispatch(setProductsListDisplay(categoryName))
                }
              />
            );
          })}
        </div>
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  } else {
    return <CircularProgress className={classes.spinner} />;
  }
};

export default CategoriesList;
