import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE } from '../actions/productActionTypes';

const initialProductDataState = {
    productData: null,
    error: ''
}

const productsReducer = (state = initialProductDataState, action) => {
    const organizeDataByCategory = (productData) => {
        return productData.reduce((newObj, item) => {
          newObj[item.category] = newObj[item.category] || [];
          newObj[item.category].push(item);
          return newObj;
        }, {});
      }
    
    switch (action.type) {
        case GET_PRODUCTS_SUCCESS: return {
            ...state,
            productData: organizeDataByCategory(action.payload),
            error: ''
        }
        case GET_PRODUCTS_FAILURE: return {
            ...state,
            productData: null,
            error: action.payload
        }
        default: return state
    }
}

export { productsReducer };