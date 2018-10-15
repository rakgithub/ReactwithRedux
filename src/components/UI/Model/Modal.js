import React from 'react';
import './Modal.css'
import Backdrop from '../Backdrop/Backdrop';

class Model extends React.Component {

    // IF 'SHOW' IS TRUE THEN ONLY THE MODEL WILL UPDATE AND THE CHILD 
    //COMPONENT ORDER SUMMARY
    // CHILD COMPONENT DEPENDS UPON PARENT COMPONENT UPDATE
    shouldComponentUpdate(nextProps, nextState){
       
        return nextProps.show !== this.props.show;
    }
    componentWillUpdate(){
  
    }

    render(){
        return(
            <div>
                <Backdrop show={this.props.show}  />
                <div className="Modal"
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity : this.props.show ? '1' : '0'          
                    }}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Model;