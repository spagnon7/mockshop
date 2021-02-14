import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getProducts } from '../actions/productActions';
import { useEffect } from 'react';
import CategoriesList from './CategoriesList';
import ProductsList from './ProductsList';

function App() {
  const activePage = useSelector(state => state.appData.activePage)
  const productCategory = useSelector(state => state.appData.productCategory)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div id='app'>
      {activePage === 'categories' && <CategoriesList />}
      {activePage === 'products' && <ProductsList productCategory={productCategory} />}
    </div>
  );
}

export default App;
