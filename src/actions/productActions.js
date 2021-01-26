import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE } from './actionTypes';

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
    const organizeDataByCategory = (productData) => {
        return productData.reduce((newObj, item) => {
          newObj[item.category] = newObj[item.category] || [];
          newObj[item.category].push(item);
          return newObj;
        }, {});
      }

    return function(dispatch) {
        dispatch(getProductsRequest());
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                const dataByCategory = organizeDataByCategory(data);
                dispatch(getProductsSuccess(dataByCategory));
            })
            .catch(error => {
                dispatch(getProductsFailure(error.message))
            })
    }
}

export { getProducts };