import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as burgerContants from '../../../constants/burger'
import './BurgerIngredient.css';

class BurgerIngredient extends Component {
    render () {
        let ingredient = null;

        if(this.props.type == null){
            return;
        }
        else if(this.props.type == burgerContants.BreadTop){          
            ingredient = (<div className ={ this.props.type }>
                            <div className = {burgerContants.Seeds1}></div>
                            <div className = {burgerContants.Seeds1}></div>
                            </div>
                        )                     
        }
        else{
            ingredient = <div className ={ this.props.type }></div>
        }

        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;