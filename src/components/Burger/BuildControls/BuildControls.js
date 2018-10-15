import React from 'react';
import * as constants from '../../../constants/burger'
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label:constants.Salad, type: constants.Salad},
    {label:constants.Bacon, type: constants.Bacon},
    {label:constants.Meat, type: constants.Meat},
    {label:constants.Cheese, type: constants.Cheese}
]

const buildControls = (props) => (
    
    <div className="BuildControls">
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.addIngredients(ctrl.type)}
                removed={() => props.removeIngredients(ctrl.type)}
                disabled={props.disabledKeys[ctrl.type]} />
        ))}
        <button 
            className="OrderButton"
            disabled= {!props.purchasable}
            onClick={props.handleOrderNow}>ORDER NOW</button>
    </div>
);

export default buildControls;