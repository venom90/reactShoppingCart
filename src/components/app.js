import React, { Component } from 'react';
import Cart from '../containers/cart';

export default class App extends Component {
    render() {
        return (
            <div>
                <h1 className="raleway">YOUR SHOPPING BAG</h1>
                <Cart />
            </div>
        );
    }
}
