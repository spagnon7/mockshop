import { SET_CATEGORIES_DISPLAY, SET_PRODUCTS_DISPLAY } from '../actions/appActionTypes';

const initialCurrentDisplay = {
    activePage: 'categories',
    productCategory: null
}

const appReducer = (state = initialCurrentDisplay, action) => {
    switch (action.type) {
        case SET_CATEGORIES_DISPLAY: return {
            ...state,
            activePage: 'categories',
            productCategory: null
        }
        case SET_PRODUCTS_DISPLAY: return {
            ...state,
            activePage: 'products',
            productCategory: action.payload
        }
        default: return state
    }
}

export { appReducer };