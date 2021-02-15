import React from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setProductsListDisplay } from '../actions/appActions';

const Product = () => {
    const dispatch = useDispatch();
    const selectedCategoryName = useSelector(state => state.appData.selectedCategoryName)

    return (
        <>
            <h2>This is the product page</h2>
            <Button variant='outlined' onClick={() => dispatch(setProductsListDisplay(selectedCategoryName))}>Back</Button>
        </>
    );
};

export default Product;