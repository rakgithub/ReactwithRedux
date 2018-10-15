import * as actionType from './actionType'
import ActionSettingsInputComponent from 'material-ui/SvgIcon';
import * as commonConstants from '../../constants/burger'

export const postOrderDetailsSuccess = (orderDetails) => {
    return{
        type: actionType.POST_ORDER_DETAILS_SUCCESS,
        orderDetails: orderDetails
    }
}

export const postOrderDetails = (orderDetails) => {
    console.log('postOrderDetails' + orderDetails)
    return dispatch => {
        setTimeout(() => {
            console.log('postOrderDetails Timeout')
            dispatch(postOrderDetailsSuccess(orderDetails))
        },3000);     
    }
}