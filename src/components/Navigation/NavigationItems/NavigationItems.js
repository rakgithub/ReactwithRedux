import React from 'react';

import  './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/orderHistory">My Orders</NavigationItem>
    </ul>
);

export default navigationItems;