import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProductsInCart, fetchProductsInCartById } from '../actions/index';
import EditModal from './EditModal';
import CTA from '../components/cta';
import lockImage from '../assets/lock.jpg';

class Cart extends Component{
    constructor(props){
        super(props);

        this.state = {
            showEditModal : false,
            editId: ''
        };

        this.modalClose = this.modalClose.bind(this);
    }
    modalClose(){
        this.setState({
            showEditModal:false
        });
    }
    componentDidMount(){
        this.props.fetchProductsInCart.call(this);
    }
    edit(id,evt){
        evt.preventDefault();
        this.setState({showEditModal: true, editId: id});
        this.props.fetchProductsInCartById.call(this, id);
    }
    remove(id,evt){
        evt.preventDefault();
    }
    saveForLater(id,evt){
        evt.preventDefault();
    }
    submitBlank(evt){
        evt.preventDefault();
    }
    render(){
        const products = this.props.products;

       return (
           <div>
               {this.props.SingleProduct && <EditModal close={this.modalClose} data={this.props.SingleProduct} show={this.props.SingleProduct && this.state.showEditModal} /> }
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
                                       <h3 className="robotoSlab allCap">{product.p_name}</h3>
                                       <p>Style #: {product.p_style}</p>
                                       <p>Color: {product.p_selected_color.name}</p>


                                       <div className="posRel cartRow">
                                           <ul className="cartItemNav">
                                               <li><a href="#" onClick={this.edit.bind(this,product.id)}>EDIT</a></li>
                                               <li><a href="#" onClick={this.remove.bind(this,product.id)}>X REMOVE</a></li>
                                               <li><a href="#" onClick={this.saveForLater.bind(this,product.id)}>SAVE FOR LATER</a></li>
                                           </ul>
                                       </div>
                                   </div>
                               </td>

                               <td>{product.p_selected_size.code}</td>
                               <td><input style={{width:20}} type="text" defaultValue={product.p_quantity} /></td>
                               <td><sup>$</sup>{product.p_price}</td>
                           </tr>
                       );
                   } )}
                   </tbody>
               </table>

               <div className="row">
                   <div className="col-md-5">
                        <CTA />
                   </div>
                   <div className="col-md-7">
                       <div className="row">
                           <div className="col-md-4">ENTER PROMOTION CODE OR GIFT CODE</div>
                           <div className="col-md-8">
                               <form onSubmit={this.submitBlank} className="promo taR">
                                   <input type="text"/><button type="submit" className="btn btn-basic">APPLY</button>
                               </form>
                           </div>
                       </div>

                       <table className="table">
                           <tbody>
                           <tr>
                               <td>SUBTOTAL</td>
                               <td><span>$</span>37.00</td>
                           </tr>
                           <tr>
                               <td>PROMOTION CODE JF10 APPLIED</td>
                               <td>-<span>$</span>7.00</td>
                           </tr>
                           <tr>
                               <td>ESTIMATED SHIPPING*<p className="grey">You qualify for free shipping because your order is over $50*</p></td>
                               <td>FREE</td>
                           </tr>
                           <tr className="estTotal">
                               <td>ESTIMATED TOTAL<p className="grey">Tax will be applied during checkout</p></td>
                               <td>$30.00</td>
                           </tr>
                           </tbody>
                       </table>

                       <div className="pull-right taR">
                           <a href="#">CONTINUE SHOPPING</a><button className="btn btn-primary">CHECKOUT</button>
                           <p className="grey"><img src={lockImage} alt=""/>Secure checkout. Shopping is always safe & secure</p>
                       </div>
                   </div>
               </div>

           </div>

       );
    }
}

//@arg state
function mapStateToProps({products, SingleProduct}){
    return { products, SingleProduct }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchProductsInCart, fetchProductsInCartById }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);