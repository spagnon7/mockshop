import { SET_CATEGORIES_LIST_DISPLAY, SET_PRODUCTS_LIST_DISPLAY, SET_PRODUCT_DISPLAY, UPDATE_SEARCH_TERM } from '../actions/appActionTypes';

const initialAppState = {
    activePage: 'categories',
    selectedCategoryName: '',
    selectedProductId: '',
    searchTerm: ''
}

const appReducer = (state = initialAppState, action) => {
    switch (action.type) {
        case SET_CATEGORIES_LIST_DISPLAY: return {
            ...state,
            activePage: 'categoriesList',
            selectedCategoryName: '',
            selectedProductId: ''
        }
        case SET_PRODUCTS_LIST_DISPLAY: return {
            ...state,
            activePage: 'productsList',
            selectedCategoryName: action.categoryName,
            selectedProductId: ''
        }
        case SET_PRODUCT_DISPLAY: return {
            ...state,
            activePage: 'product',
            selectedProductId: action.productId
        }
        case UPDATE_SEARCH_TERM: return {
            ...state,
            searchTerm: action.newSearchTerm
        }
        default: return state
    }
}

export { appReducer };