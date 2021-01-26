import React from 'react';
import { useDispatch} from 'react-redux';
import { getProducts } from '../actions/productActions'
import { useEffect } from 'react';
import CategoriesList from './CategoriesList';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div id='app'>
      <CategoriesList />
    </div>
  );
}

export default App;
