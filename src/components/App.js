import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getProducts } from '../actions/productActions';
import { useEffect } from 'react';
import CategoriesList from './CategoriesList';
import ProductsList from './ProductsList';
import Product from './Product';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import {setCategoriesListDisplay} from '../actions/appActions'

const useStyles = makeStyles(() => ({
  appBar: {
    marginBottom: 30
  }
}));

function App() {
  const activePage = useSelector(state => state.appData.activePage);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  
  const pageContent = () => {
    switch(activePage) {
      case 'categoriesList':
          return <CategoriesList />;
        case 'productsList':
          return <ProductsList />;
        case 'product':
          return <Product />;
        default:
          return <CategoriesList />;
    }
  }

  return (
    <div id='app'>
      <AppBar position='static' className={classes.appBar}>
        <Toolbar>
          <IconButton color='inherit' onClick={() => {dispatch(setCategoriesListDisplay())}}>
            <HomeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {pageContent()}
    </div>
  );
}

export default App;
