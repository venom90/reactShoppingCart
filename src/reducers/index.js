import { combineReducers } from 'redux';
import ProductReducer from './reducer_products';
import SingleProduct from './reducer_singleProduct';

const rootReducer = combineReducers({
    products:ProductReducer,
    SingleProduct: SingleProduct
});

export default rootReducer;
