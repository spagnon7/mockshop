import { SET_CATEGORIES_DISPLAY, SET_PRODUCTS_DISPLAY } from '../actions/displayActionTypes';

const initialCurrentDisplay = {
    currentDisplay: 'categories',
    productCategory: null
}

const currentDisplayReducer = (state = initialCurrentDisplay, action) => {
    switch (action.type) {
        case SET_CATEGORIES_DISPLAY: return {
            ...state,
            currentDisplay: 'categories',
            productCategory: null
        }
        case SET_PRODUCTS_DISPLAY: return {
            ...state,
            currentDisplay: 'products',
            productCategory: action.payload
        }
        default: return state
    }
}

export { currentDisplayReducer };