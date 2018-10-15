import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import MyOrders from './containers/MyOrders/MyOrders'
import OrderHistory from './containers/MyOrders/OrderHistory';
import Auth from './containers/Auth/Auth'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>          
            <Route path="/" exact component= { BurgerBuilder } />
            <Route path="/checkout" exact component= { MyOrders } />    
            <Route path="/orderHistory" exact component= { OrderHistory } />
            <Route path="/auth" exact component= { Auth } />      
        </Layout>
      </div>
    );
  }
}

export default App;
