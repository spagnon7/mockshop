import { SET_CATEGORIES_LIST_DISPLAY, SET_PRODUCTS_LIST_DISPLAY, SET_PRODUCT_DISPLAY } from './appActionTypes';

const setCategoriesListDisplay = () => {
    return {
        type: SET_CATEGORIES_LIST_DISPLAY
    }
}

const setProductsListDisplay = (categoryName) => {
    return {
        type: SET_PRODUCTS_LIST_DISPLAY,
        categoryName
    }
}

const setProductDisplay = (productId) => {
    return {
        type: SET_PRODUCT_DISPLAY,
        productId
    }
}

export { setCategoriesListDisplay, setProductsListDisplay, setProductDisplay }