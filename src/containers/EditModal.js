import React, { Component } from 'react'
import Modal from '../components/common/modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editProduct } from '../actions/index';

class EditModal extends Component{
    constructor(props){
        super(props);

        this.finalObject = {};

        this.close = this.close.bind(this);
    }
    componentDidMount(){

    }
    close(){
        this.props.close.call(this);
    }
    submit(id, evt){
        this.props.editProduct.call(this, id, this.finalObject);
        this.close();
    }
    changeColor(hexcode, evt){

    }
    render(){
        const _d = this.finalObject = this.props.data;
        let pName = this.props.data.p_selected_color && this.props.data.p_selected_color.name;

        return (
            <Modal
                close={this.close}
                show={this.props.show}
            >
                <div className="row">
                    <div className="col-md-6 edit-control">
                        <h3 className="robotoSlab allCap taC">{_d.p_name}</h3>
                        <p className="price taC"><sup>$</sup>{_d.p_price}</p>
                        <div className="color">
                            <h4 className="allCap taC">{pName}</h4>
                            <ul>
                                {_d.p_available_options && _d.p_available_options.colors.map((color) => {
                                    return (
                                        <li onClick={this.changeColor.bind(this, color.hexcode)} style={{backgroundColor: color.hexcode}}></li>
                                    )
                                })}
                            </ul>
                        </div>

                        <div className="taC">
                            <select>
                                <option value="">SIZE</option>
                                {_d.p_available_options && _d.p_available_options.sizes.map((size) => {
                                    return (
                                        <option>{size.name}</option>
                                    );
                                })}
                            </select><select>
                                <option value="">QTY</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>

                        <button className="btn btn-primary taC" onClick={this.submit.bind(this, this.props.data.id)}>EDIT</button>
                        <p className="tu grey">Seer product details</p>

                    </div>
                    <div className="col-md-6 image-holder">
                        <img src={_d.p_img} alt=""/>
                    </div>
                </div>
            </Modal>
        );
    }
}
//@arg state
function mapStateToProps({products, SingleProduct}){
    return { products, SingleProduct }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({ editProduct }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(EditModal);