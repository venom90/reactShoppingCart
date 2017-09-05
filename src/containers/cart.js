import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProductsInCart } from '../actions/index';
import EditModal from '../components/EditModal';

class Cart extends Component{
    constructor(props){
        super(props);

        this.state = {
            showModal : false
        };

        this.modalClose = this.modalClose.bind(this);
    }
    modalClose(){
        this.setState({
            showModal:false
        });
    }
    componentWillMount(){
        this.props.fetchProductsInCart.call(this);
    }
    edit(id,evt){
        evt.preventDefault();
    }
    remove(id,evt){
        evt.preventDefault();
    }
    saveForLater(id,evt){
        evt.preventDefault();
    }
    render(){
        const products = this.props.products;

       return (
           <div>
               <EditModal close={this.modalClose} />
               <table className="table">
                   <thead>
                   <tr>
                       <th>{products && products.length} ITEMS</th>
                       <th>SIZE</th>
                       <th>QTY</th>
                       <th>PRICE</th>
                   </tr>
                   </thead>
                   <tbody>
                   {products && products.map( product => {
                       return (
                           <tr key={product.id}>
                               <td>
                                   <div className="col-md-3">
                                       <img src={product.p_img}/>
                                   </div>
                                   <div className="col-md-9">
                                       <h3 className="robotoSlab">{product.p_name}</h3>
                                       <p>Style #: {product.p_style}</p>
                                       <p>Color: {product.p_selected_color.name}</p>


                                       <div>
                                           <ul>
                                               <li><a href="#" onClick={this.edit.bind(this,product.id)}>EDIT</a></li>
                                               <li><a href="#" onClick={this.remove.bind(this,product.id)}>X REMOVE</a></li>
                                               <li><a href="#" onClick={this.saveForLater.bind(this,product.id)}>SAVE FOR LATER</a></li>
                                           </ul>
                                       </div>
                                   </div>
                               </td>

                               <td>{product.p_selected_size.code}</td>
                               <td><input type="text" defaultValue={product.p_quantity} /></td>
                               <td><sup>$</sup>{product.p_price}</td>
                           </tr>
                       );
                   } )}
                   </tbody>
               </table>
           </div>

       );
    }
}

//@arg state
function mapStateToProps({products}){
    return { products }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchProductsInCart }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);