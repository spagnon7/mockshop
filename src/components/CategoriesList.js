import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProductsDisplay } from '../actions/appActions';
import 'fontsource-roboto';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import CardTemplate from './CardTemplate';

const useStyles = makeStyles({
    spinner: {
        marginTop: 90,
    }
});

const CategoriesList = () => {
    const productData = useSelector(state => state.productData.productData);
    const error = useSelector(state => state.productData.error);    
    const dispatch = useDispatch();
    const classes = useStyles();

  if (productData) {
        return (
            <div id='cards-container'>
                {Object.keys(productData).map( categoryName => {     
                    return <CardTemplate 
                        title = {categoryName}
                        imageURL = {productData[categoryName][0]['image']}
                        clickHandler = {() => dispatch(setProductsDisplay(categoryName))}
                    />;
                })}
            </div>
        );
    }

    if (error) {
        return <p>{error}</p>;
    }

    else {
        return <CircularProgress className={classes.spinner}/>;
    }
};

export default CategoriesList;