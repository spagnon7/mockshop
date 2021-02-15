import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getProducts } from '../actions/productActions';
import { useEffect } from 'react';
import CategoriesList from './CategoriesList';
import ProductsList from './ProductsList';
import Product from './Product';

function App() {
  const activePage = useSelector(state => state.appData.activePage)
  const selectedCategoryName = useSelector(state => state.appData.selectedCategoryName)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  
  const pageContent = (activePage) => {
    switch(activePage) {
      case 'categoriesList':
          return <CategoriesList />;
        case 'productsList':
          return <ProductsList selectedCategoryName={selectedCategoryName} />;
        case 'product':
          return <Product />;
        default:
          return <CategoriesList />;
    }
  }

  return (
    <div id='app'>
      {pageContent(activePage)}
    </div>
  );
}

export default App;
