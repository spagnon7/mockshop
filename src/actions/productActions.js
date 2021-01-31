import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE } from './productActionTypes';

const getProductsRequest = () => {
    return {
        type: GET_PRODUCTS_REQUEST
    }
};

const getProductsSuccess = productsData => {
    return {
        type: GET_PRODUCTS_SUCCESS,
        payload: productsData
    }
};

const getProductsFailure = errorMessage => {
    return {
        type: GET_PRODUCTS_FAILURE,
        payload: errorMessage
    }
};

const getProducts = () => {
    return function(dispatch) {
        dispatch(getProductsRequest());
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                dispatch(getProductsSuccess(data));
            })
            .catch(error => {
                dispatch(getProductsFailure(error.message))
            })
    }
}

export { getProducts };