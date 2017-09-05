import axios from 'axios';

const ROOT_URL = 'http://localhost:3000/productsInCart';

export const FETCH_PRODUCTS_IN_CART_BY_ID = 'FETCH_PRODUCTS_IN_CART_BY_ID';
export const FETCH_ALL_PRODUCTS = 'FETCH_ALL_PRODUCTS';

export function fetchProductsInCart(){
    const request = axios.get(ROOT_URL);

    return {
      type: FETCH_ALL_PRODUCTS,
      payload: request
    };
}

export function fetchProductsInCartById(id){
    const url = `${ROOT_URL}/${id}`;
    const request = axios.get(url);

    return {
        type: FETCH_PRODUCTS_IN_CART_BY_ID,
        payload: request
    }
}