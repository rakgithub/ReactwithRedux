import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import InputField from '../../UI/Input/Input'
import * as constants from '../../../constants/burger';

const CheckoutSummary = (props) => {

    return (
            <div>
                <h2>Your burger is ready to be served:</h2>
                <div style={{width: '100%', margin:'auto'}}>
                    <Burger ingredients={props.ingredients} />
                </div>
                <hr />
                <h2>Delivery details:</h2>
                <div>Name: <InputField type="text" placeholder="Enter your name" name={constants.ORDER_PERSONAL_DETAILS.NAME} onChange={props.handleChange}/>
                </div>
                <div>
                Email: <InputField type="text" placeholder="Enter your email" name={constants.ORDER_PERSONAL_DETAILS.EMAIL} onChange={props.handleChange}/>
                </div>
                <div>
                Mobile: <InputField type="text" placeholder="Enter your mobile" name={constants.ORDER_PERSONAL_DETAILS.MOBILE} onChange={props.handleChange}/>
                </div>
                <div>
                Address: <InputField type="textarea" placeholder="Enter your address" name={constants.ORDER_PERSONAL_DETAILS.ADDRESS} onChange={props.handleChange}/>
                </div>
                <Button btnType="Danger">CANCEL</Button>
                <Button btnType="Success" onClick={props.handleOrderNow}>Place Order Now</Button>
            </div>
    )
}

export default CheckoutSummary;
