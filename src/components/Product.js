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
            <div id='product-container'>
                <img src={selectedProductData.image} id='product-image'/>
                <div id='product-details'>
                    <h2>{selectedProductData.title}</h2>
                    <p>{selectedProductData.description}</p>
                    <p id='product-price'>Price: ${selectedProductData.price}</p>
                    <Button variant='outlined' onClick={() => {}}>Add to Cart</Button>
                </div>
            </div>
            <Button variant='outlined' onClick={() => dispatch(setProductsListDisplay(selectedCategoryName))}>Back</Button>
        </>
    );
};

export default Product;