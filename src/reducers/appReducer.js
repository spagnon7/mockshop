import { SET_CATEGORIES_LIST_DISPLAY, SET_PRODUCTS_LIST_DISPLAY, SET_PRODUCT_DISPLAY } from '../actions/appActionTypes';

const initialAppState = {
    activePage: 'categories',
    selectedCategoryName: null,
    selectedProductId: null
}

const appReducer = (state = initialAppState, action) => {
    switch (action.type) {
        case SET_CATEGORIES_LIST_DISPLAY: return {
            ...state,
            activePage: 'categoriesList',
            selectedCategoryName: null,
            selectedProductId: null
        }
        case SET_PRODUCTS_LIST_DISPLAY: return {
            ...state,
            activePage: 'productsList',
            selectedCategoryName: action.categoryName,
            selectedProductId: null
        }
        case SET_PRODUCT_DISPLAY: return {
            ...state,
            activePage: 'product',
            selectedProductId: action.productId
        }
        default: return state
    }
}

export { appReducer };