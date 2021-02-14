import {combineReducers} from 'redux';
import {productsReducer} from './productsReducer';
import {appReducer} from './appReducer';

const rootReducer = combineReducers({
    productData: productsReducer,
    appData: appReducer
})

export {rootReducer};