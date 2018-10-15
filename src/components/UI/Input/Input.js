import React from 'react';
import PropTypes from 'prop-types'
import './Input.css'

class InputField extends React.Component{
    
    render(){
        let renderInput = null;

        switch(this.props.type){
            case 'text':
                renderInput = <input {...this.props} />
                break;
            case 'textarea':
                renderInput = <textarea {...this.props} />
        }
        return(
            <div className="input">
                {renderInput}
            </div>
        )
    }
}

InputField.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default InputField;