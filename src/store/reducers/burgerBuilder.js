import * as actionType from '../actions/actionType'; 
import * as constants from '../../constants/burger';
import { updateObject } from '../utility';

const initialState = {
    ingredients: {
        [constants.Salad]: 0,
        [constants.Cheese]: 0,
        [constants.Meat]: 0,
        [constants.Bacon]: 0
    },
    totalPrice: 4
}

const reducer = (state = initialState, action) => {
    console.log(Object.keys(state));
    switch(action.type){
        case actionType.ADD_BURGER_INGREDIENT:       
            const newAddedPrice = state.totalPrice + constants.INGREDIENTS_PRICE[action.igName];
            let updatedAddState = {
                ingredients :{
                        ...state.ingredients,                    
                        [action.igName] : state.ingredients[action.igName] + 1
                    },
                totalPrice: newAddedPrice
            }
            return updateObject(...state, updatedAddState)
        case actionType.REMOVE_BURGER_INGREDIENT:
            const newRemovedPrice = state.totalPrice - constants.INGREDIENTS_PRICE[action.igName];
            let updatedRemoveState = {
                ingredients :{
                        ...state.ingredients,                    
                        [action.igName] : state.ingredients[action.igName] - 1
                    },
                totalPrice: newRemovedPrice
            }
            return updateObject(...state, updatedRemoveState)
        case actionType.SET_BURGER_INGREDIENT:
            let setInitState = {
                ingredients:action.ing.ingredients,
                totalPrice: action.ing.totalPrice
            }
            return updateObject(...state, setInitState)
        default: 
            return state;
    }
}

export default reducer;