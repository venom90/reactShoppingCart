import { FETCH_PRODUCTS_IN_CART_BY_ID } from '../actions/index';

export default function (state = [], action) {
    switch (action.type){
        case FETCH_PRODUCTS_IN_CART_BY_ID:
            return action.payload.data;
    }
    return state;
}