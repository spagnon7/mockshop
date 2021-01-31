import {combineReducers} from 'redux';
import {productDataReducer} from './productDataReducer';
import {currentDisplayReducer} from './currentDisplayReducer';

const rootReducer = combineReducers({
    productData: productDataReducer,
    currentDisplay: currentDisplayReducer
})

export {rootReducer};