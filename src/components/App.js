import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../actions/productActions";
import { useEffect } from "react";
import CategoriesList from "./CategoriesList";
import ProductsList from "./ProductsList";
import Product from "./Product";
import SearchResults from "./SearchResults";
import StoreAppBar from "./StoreAppBar";

function App() {
  const activePage = useSelector((state) => state.appData.activePage);
  const currentSearchTerm = useSelector((state) => state.appData.searchTerm);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const pageContent = () => {
    switch (activePage) {
      case "categoriesList":
        return <CategoriesList />;
      case "productsList":
        return <ProductsList />;
      case "product":
        return <Product />;
      default:
        return <CategoriesList />;
    }
  };

  return (
    <div id="app">
      <StoreAppBar />
      {currentSearchTerm ? (
        <SearchResults />
      ) : (
        <div id="page-content-container">{pageContent()}</div>
      )}
    </div>
  );
}

export default App;
