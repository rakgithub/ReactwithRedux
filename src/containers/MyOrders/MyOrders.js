import React from 'react';
import Aux from '../../hoc/Aux';
import CheckoutSummary from '../../components/MyOrder/CheckoutSummary/CheckoutSummary'
import * as constants from '../../constants/burger';
import { connect } from 'react-redux';
import * as actionCreator from '../../store/actions/index';
import { Redirect } from 'react-router-dom';

class MyOrders extends React.Component{

    state = {
        orderDetails:{
            NAME: null,
            MOBILE: null,
            EMAIL: null,
            ADDRESS:null
        }
    }
    
    componentWillMount(){
        console.log('My Order Will mount')
    }

    handleOrderDetailsChange = (event) => {
       const details = {...this.state.orderDetails};
        details[event.target.name] = event.target.value;
        this.setState({
            orderDetails: details
        });
        var finalOrderDetails = {
            burger: this.props.ingredients,
            personalDetails: details
        }
      
    }

    handleOrderNow = () => {
       const finalOrderDetails= {
            burgerIngredients: this.props.reduxIngredients,
            personalDetails: this.state.orderDetails
       }
       this.props.submitOrder(finalOrderDetails);
    }

    render(){   
        let checkoutSummary = <Redirect to="/" />
        if(this.props.orderPlaced.placedOrder){
            checkoutSummary = <Redirect to="/" />
        }
        if(this.props.reduxIngredients && !this.props.orderPlaced.placedOrder){
            checkoutSummary =   <CheckoutSummary ingredients= {this.props.reduxIngredients} 
            handleChange={this.handleOrderDetailsChange} 
            handleOrderNow = {this.handleOrderNow }
            /> 
        }

        return(
            <Aux>
             {checkoutSummary}
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        reduxIngredients : state.burgerBuilderRedu.ingredients,
        orderPlaced: state.orderRedu.orderPost
    }
}

const   mapDispatchToProps = dispatch => {
    return{
        submitOrder: (finalOrderDetails)=> dispatch(actionCreator.postOrderDetails(finalOrderDetails))        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyOrders);