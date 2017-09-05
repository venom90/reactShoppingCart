import React, { Component } from 'react';

class Modal extends Component{
    constructor(props){
        super(props);

        this.close = this.close.bind(this);
    }
    close(){
        this.props.close.call(this);
    }
    render(){
        return (
            <div className="modal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <button
                            type="button"
                            className="close"
                            onClick={this.close}
                        >&times;</button>
                        <div className="modal-body">
                            {this.props.children}
                        </div>
                    </div>

                </div>
            </div>
    );
    }
}

export default Modal;