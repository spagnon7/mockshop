import React from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setProductsListDisplay } from '../actions/appActions';

const Product = () => {
    const dispatch = useDispatch();
    const selectedCategoryName = useSelector(state => state.appData.selectedCategoryName);
    const selectedProductId = useSelector(state => state.appData.selectedProductId);
    const productDataById = useSelector(state => state.productData.productDataById);
    const selectedProductData = productDataById[selectedProductId];

    return (
        <>
            <h2>This is the product page. The selected product ID is {selectedProductId}</h2>
            <p>product title: {selectedProductData.title}</p>
            <Button variant='outlined' onClick={() => dispatch(setProductsListDisplay(selectedCategoryName))}>Back</Button>
        </>
    );
};

export default Product;