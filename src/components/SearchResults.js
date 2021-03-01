import { render } from "@testing-library/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { clearSearchTerm } from "../actions/appActions";

const useStyles = makeStyles(() => ({
  clearSearchButton: {
    marginTop: 19.92,
  },
}));

const SearchResults = () => {
  const currentSearchTerm = useSelector((state) => state.appData.searchTerm);
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClearSearchButtonClick = () => {
    dispatch(clearSearchTerm());
  };

  return (
    <div id="search-results-banner">
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
  );
};

export default SearchResults;
