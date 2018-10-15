import React from 'react';

const Orders = (props) => {
    console.dir(props.Ingredients)
    return (
        <div>
            <span>{props.Ingredients}</span>
            <div>
                price: {props.price}
            </div>
        </div>
    )
}

export default Orders;