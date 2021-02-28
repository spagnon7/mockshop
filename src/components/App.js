import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getProducts } from '../actions/productActions';
import { useEffect } from 'react';
import CategoriesList from './CategoriesList';
import ProductsList from './ProductsList';
import Product from './Product';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { fade, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import {setCategoriesListDisplay, updateSearchTerm} from '../actions/appActions';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';


const useStyles = makeStyles((theme) => ({
  appBar: {
    marginBottom: 30
  },
  appToolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  homeButton: {
    marginRight: 20,
    display: 'inline-block'
  },
  search: {
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {backgroundColor: fade(theme.palette.common.white, 0.25)},
    borderRadius: 5,
    justifySelf: 'flex-end',
    display: 'flex',
    alignItems: 'center'
  },
    leftAppBarItems: {
    display: 'flex',
    alignItems: 'center'
  },
  searchIcon: {
    height: '100%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    padding: 5,
    position: 'absolute',
  },
  searchInput: {
    color: 'inherit',
    padding: 5,
    paddingLeft: 'calc(1em + 15px)',
    width: '10em',
    transition: 'width 0.3s'
  },
  searchInputFocused: {
    width: '15em',
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

  const handleSearchTermChange = event => {
    dispatch(updateSearchTerm(event.target.value));
  }

  return (
    <div id='app'>
      <AppBar position='static' className={classes.appBar}>
        <Toolbar className={classes.appToolbar}>
          <div className={classes.leftAppBarItems}>
            <IconButton color='inherit' className={classes.homeButton} onClick={() => {dispatch(setCategoriesListDisplay())}}>
              <HomeIcon />
            </IconButton>
            <Typography>
              Sean's Wonderful WebStore
            </Typography>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase placeholder='Search...' className={classes.searchInput} classes={{focused: classes.searchInputFocused}} onChange={handleSearchTermChange}/>
          </div>
        </Toolbar>
      </AppBar>
      {pageContent()}
    </div>
  );
}

export default App;
