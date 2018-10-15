import React from 'react';
import Orders from '../../components/MyOrder/OrderHistory/Orders';
import { connect } from 'react-redux';

class OrderHistory extends React.Component{

    render(){
        console.dir(this.props.orders);
        return(
            <div>
                <Orders Ingredients={this.props.orders} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        orders: state.orderRedu.orderPost.orders
    }
}

export default connect(mapStateToProps) (OrderHistory);