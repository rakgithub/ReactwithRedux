import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger'
import * as constants from '../../constants/burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Model/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders'
import ErrorBoundary from '../../hoc/ErrorBoundary';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index'

class BurgerBuilder extends Component {
    constructor(props){
        super(props);
        this.state = {
            totalPrice: 2,
            purchasable: false,
            showOrderSummary: false
        }
    }
    
    updatePurchasable = (ingredients) => {
        const sum = Object.keys(ingredients).map(key => {
                        return ingredients[key];
                    }).reduce((sum, el) => {
                        return sum + el;
                    },0);
        return sum > 0;
    }

    // addIngredientsHandler = (type) => {             
    //     const updatedCount = this.state.ingredients[type] + 1;       
    //     const updatedIngredients = { ...this.state.ingredients}
    //     updatedIngredients[type] = updatedCount;
    //     const newPrice = this.state.totalPrice + constants.INGREDIENTS_PRICE[type];
    //     this.setState({
    //         ingredients : updatedIngredients,
    //         totalPrice: newPrice
    //     });       
    //     this.updatePurchasable(updatedIngredients);
    // }
    
    // removeIngredientsHandler = (type) => {
    //     if(this.state.ingredients[type]  <= 0){
    //         return;
    //     }
    //     const updatedCount = this.state.ingredients[type] - 1;       
    //     const updatedIngredients = { ...this.state.ingredients}
    //     updatedIngredients[type] = updatedCount;
    //     const newPrice = this.state.totalPrice - constants.INGREDIENTS_PRICE[type];
    //     this.setState({
    //         ingredients : updatedIngredients,
    //         totalPrice: newPrice
    //     }); 
    //     this.updatePurchasable(updatedIngredients);     
    // }

    handleOrderNow = () => {        
        this.setState({showOrderSummary: true});
    }

    handleOrderSummaryCancel = () => {
        this.setState({showOrderSummary:false});
    }

    handleOrderCheckout = () => {
       // axios.post('/orders')
       // MAKE HTTP POST CALL TO SAVE THE BURGER DATA
       this.props.history.push('/checkout');
    
    }

    componentDidMount(){   
        // const dbIngredients = { 
        //     "Meat": 2,
        //     "Cheese": 3,
        //     "Salad": 1,
        //     "Bacon": 0
        // }    
        // setTimeout(()=>{
        //     this.setState({
        //         ingredients : dbIngredients
        //     })            
        // },5000);   
        this.props.getInitialBurgerIngredients();     
    }

    render(){  
        const disabledKeys = {...this.props.reduxIngre}
        Object.keys(disabledKeys).map(key => {
            disabledKeys[key] > 0 ? disabledKeys[key] = false : disabledKeys[key] = true;
        });
        
        return(
            <div>
                <ErrorBoundary>
                    <Modal show= { this.state.showOrderSummary }>
                        <OrderSummary ingredients= {this.props.reduxIngre} 
                        handleOrderSummaryCancel = {this.handleOrderSummaryCancel}
                        handleOrderCheckout = {this.handleOrderCheckout}
                        price ={ this.state.totalPrice}
                        show = {this.state.show} />
                    </Modal>
                </ErrorBoundary>
                <ErrorBoundary>
                    <Burger ingredients= { this.props.reduxIngre} />
                </ErrorBoundary>
                <ErrorBoundary>
                    <BuildControls addIngredients= {this.props.onIngreAdded}
                        removeIngredients= {this.props.onIngreRemoved} 
                        disabledKeys = { disabledKeys } 
                        price = {this.props.reduxTotalPrice }
                        purchasable= {this.updatePurchasable(this.props.reduxIngre)}
                        handleOrderNow ={ this.handleOrderNow}/>
                 </ErrorBoundary>                
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        reduxIngre : state.burgerBuilderRedu.ingredients,
        reduxTotalPrice: state.burgerBuilderRedu.totalPrice
    }
}

const mapDispatchToProps = dispatch => {    
    return{
        onIngreAdded: (igName) => dispatch(actionCreators.addIngredient(igName)), 
        onIngreRemoved: (igName) => dispatch(actionCreators.removeIngredient(igName)),
        getInitialBurgerIngredients: () => {
            dispatch(actionCreators.getInitialBurgerIngredients())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);