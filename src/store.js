import { createStore, applyMiddleware } from 'redux';
import { productDataReducer } from './reducers/productDataReducer';
import thunk from 'redux-thunk';

const store = createStore(productDataReducer, applyMiddleware(thunk));

export default store;