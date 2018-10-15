import * as actionType from '../actions/actionType';

const initialState = {
    orderPost: {
        submit: false,
        msg: null,
        placedOrder: false,
        orders: []
    }
}
const orderReducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.POST_ORDER_DETAILS_SUCCESS:
            console.dir('Reducer Received');
            console.dir(action.orderDetails); 
            return{
                ...state,
                orderPost :{ 
                    ...state.orderPost,
                    submit : true,
                    msg: action.msg,
                    placedOrder: true,
                    orders: [
                        ...state.orderPost.orders,
                        action.orderDetails
                    ]
                }
            }
        default:
            return state;
    }
}

export default orderReducer;