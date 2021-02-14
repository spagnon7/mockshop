import { SET_CATEGORIES_DISPLAY, SET_PRODUCTS_DISPLAY } from '../actions/appActionTypes';

const initialCurrentDisplay = {
    activePage: 'categories',
    selectedCategoryName: null
}

const appReducer = (state = initialCurrentDisplay, action) => {
    switch (action.type) {
        case SET_CATEGORIES_DISPLAY: return {
            ...state,
            activePage: 'categories',
            selectedCategoryName: null
        }
        case SET_PRODUCTS_DISPLAY: return {
            ...state,
            activePage: 'products',
            selectedCategoryName: action.payload
        }
        default: return state
    }
}

export { appReducer };