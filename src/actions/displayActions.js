import { SET_CATEGORIES_DISPLAY, SET_PRODUCTS_DISPLAY } from './displayActionTypes';

const setCategoriesDisplay = () => {
    return {
        type: SET_CATEGORIES_DISPLAY
    }
}

const setProductsDisplay = (productCategory) => {
    return {
        type: SET_PRODUCTS_DISPLAY,
        payload: productCategory
    }
}

export { setCategoriesDisplay, setProductsDisplay }