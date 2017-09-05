import { FETCH_ALL_PRODUCTS } from '../actions/index';

export default function (state = [], action) {
    switch (action.type){
        case  FETCH_ALL_PRODUCTS:
            return action.payload.data;
    }
    return state;
}