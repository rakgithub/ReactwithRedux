import React from 'react';
import PropTypes  from 'prop-types'
import './Button.css';

class Button extends React.Component {
    render(){       
        let button = null;
        if(this.props.btnType == "Danger"){
            button = <button
            className={"Button Danger"}
            onClick={this.props.onClick}>{this.props.children}</button>
        }else{
            button = <button
            className={"Button Success"}
            onClick={this.props.onClick}>{this.props.children}</button>
        }    
        return button;
    }
}

Button.propTypes = {
    btnType : PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button;