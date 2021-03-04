import { render } from "@testing-library/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { clearSearchTerm } from "../actions/appActions";
import CardTemplate from "./CardTemplate";
import { setProductDisplay } from "../actions/appActions";

const useStyles = makeStyles(() => ({
  clearSearchButton: {
    marginTop: 19.92,
  },
  searchResultsBanner: {
    display: "flex",
    margin: "0 30px 0 80px",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  productCardsContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
}));

const SearchResults = () => {
  const currentSearchTerm = useSelector((state) => state.appData.searchTerm);
  const productsByID = useSelector(
    (state) => state.productData.productDataById
  );
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClearSearchButtonClick = () => {
    dispatch(clearSearchTerm());
  };

  let IDsOfProductsMatchingSearchTerm = Object.keys(productsByID).filter(
    (productID) => {
      return (
        productsByID[productID].title
          .toLowerCase()
          .includes(currentSearchTerm.toLowerCase()) ||
        productsByID[productID].description
          .toLowerCase()
          .includes(currentSearchTerm.toLowerCase()) ||
        productsByID[productID].category
          .toLowerCase()
          .includes(currentSearchTerm.toLowerCase())
      );
    }
  );

  return (
    <>
      <div className={classes.searchResultsBanner}>
        <div id="search-details">
          <h2>Search results for</h2>
          <h3>"{currentSearchTerm}"</h3>
        </div>
        <Button
          variant="outlined"
          className={classes.clearSearchButton}
          onClick={handleClearSearchButtonClick}
        >
          Clear Search Results
        </Button>
      </div>
      {currentSearchTerm.length > 3 && (
        <div className={classes.productCardsContainer}>
          {IDsOfProductsMatchingSearchTerm.map((productId) => {
            return (
              <CardTemplate
                title={productsByID[productId].title}
                imageURL={productsByID[productId].image}
                clickHandler={() =>
                  dispatch(
                    setProductDisplay(
                      productId,
                      productsByID[productId].category
                    )
                  )
                }
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default SearchResults;
