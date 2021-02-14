import { SET_CATEGORIES_DISPLAY, SET_PRODUCTS_DISPLAY } from './appActionTypes';

const setCategoriesDisplay = () => {
    return {
        type: SET_CATEGORIES_DISPLAY
    }
}

const setProductsDisplay = (categoryName) => {
    return {
        type: SET_PRODUCTS_DISPLAY,
        categoryName
    }
}

export { setCategoriesDisplay, setProductsDisplay }