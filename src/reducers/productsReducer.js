import { POPULATE_PRODUCTS, GET_PRODUCTS_FAILURE } from '../actions/productActionTypes';

const initialProductDataState = {
    productDataByCategory: {},
    productDataById: {},
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

    const organizeDataById = (productData) => {
        return productData.reduce( (newObj, item) => {
            newObj[item.id] = item;
            return newObj;
        }, {});
    }
    
    switch (action.type) {
        case POPULATE_PRODUCTS: return {
            ...state,
            productDataByCategory: organizeDataByCategory(action.payload),
            productDataById: organizeDataById(action.payload),
            error: ''
        };
        case GET_PRODUCTS_FAILURE: return {
            ...state,
            productDataByCategory: null,
            productDataById: null,
            error: action.payload
        };
        default: return state;
    }
}

export { productsReducer };