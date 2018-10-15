// ACTION CREATORS

import * as actionType from './actionType';

export const addIngredient = (igName) => {
    return{
        type: actionType.ADD_BURGER_INGREDIENT,
        igName: igName
    }
}

export const removeIngredient = igName => {
    return{
        type: actionType.REMOVE_BURGER_INGREDIENT,
        igName: igName
    }
}

export const setInitialIgredients = (ingredients) => {
    return{
        type: actionType.SET_BURGER_INGREDIENT,
        ing: ingredients
    }
}
// API CALL ON INITIAL RENDERING DATA
export const getInitialBurgerIngredients = ()  => {  
    return dispatch => {
     
        setTimeout(() => {
           
            dispatch(setInitialIgredients({
                ingredients:{Salad:2,Cheese:1,Meat:1,Bacon:0},
                totalPrice: 10
            }));            
        }, 5000);
    }   
}   
