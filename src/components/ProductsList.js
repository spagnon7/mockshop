import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoriesDisplay } from '../actions/appActions';
import 'fontsource-roboto';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CardTemplate from './CardTemplate';

const useStyles = makeStyles({
    cardDiv: {
        width: '20%',
        maxWidth: 200,
        margin: 4,
        textAlign: 'center',
        listStyleType: 'none'
    },
    media: {
        height: 200,
        width: '90%',
        backgroundSize: 'contain',
        margin: '5px auto'
    },
    label: {
        fontWeight: 'bold'
    },
    spinner: {
        marginTop: 90,
    },
    title: {
        fontSize: 20,
        textTransform: 'capitalize'
    }
})

const ProductsList = (props) => {
    const productData = useSelector(state => state.productData.productData);
    const dispatch = useDispatch();
    const classes = useStyles();
    const selectedCategoryData = productData[props.selectedCategoryName];

    console.log(selectedCategoryData);

    return (
        <>
            <h2 className={classes.title}>{props.selectedCategoryName}</h2>
            <div id='cards-container'>
                {selectedCategoryData.map( productData => {     
                    return <CardTemplate 
                        title = {productData.title}
                        imageURL = {productData.image}
                        clickHandler = {() => {}}
                    />;
                })}
            </div>
            <Button variant='outlined' onClick={() => dispatch(setCategoriesDisplay())}>Back</Button>
        </>
    );
}

export default ProductsList;