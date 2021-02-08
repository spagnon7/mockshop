import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getProducts } from '../actions/productActions';
import { useEffect } from 'react';
import CategoriesList from './CategoriesList';
import ProductsList from './ProductsList';

function App() {
  const currentDisplay = useSelector(state => state.currentDisplay.currentDisplay)
  const productCategory = useSelector(state => state.currentDisplay.productCategory)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div id='app'>
      {currentDisplay === 'categories' && <CategoriesList />}
      {currentDisplay === 'products' && <ProductsList productCategory={productCategory} />}
    </div>
  );
}

export default App;
