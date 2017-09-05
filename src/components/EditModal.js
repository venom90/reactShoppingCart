import React, { Component } from 'react'
import Modal from './common/modal';

class EditModal extends Component{
    constructor(props){
        super(props);

        this.close = this.close.bind(this);
    }
    close(){
        this.props.close.call(this);
    }
    render(){
        return (
            <Modal
                close={this.close}
            >
                Hello
            </Modal>
        );
    }
}

export default EditModal;