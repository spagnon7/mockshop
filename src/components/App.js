import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getProducts } from '../actions/productActions';
import { setProductsDisplay, setCategoriesDisplay } from '../actions/displayActions';
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

  const handleCategoryCardClick = category => {
    dispatch(setProductsDisplay(category));
  }

  const handleBackButtonClick = () => {
    dispatch(setCategoriesDisplay());
  }

  return (
    <div id='app'>
      {currentDisplay === 'categories' && <CategoriesList handleCategoryCardClick={handleCategoryCardClick}/>}
      {currentDisplay === 'products' && <ProductsList productCategory={productCategory} handleBackButtonClick={handleBackButtonClick}/>}
    </div>
  );
}

export default App;
