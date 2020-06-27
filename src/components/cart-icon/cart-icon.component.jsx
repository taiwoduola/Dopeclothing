import React from 'react';
import { connect } from 'react-redux';
import toggleCartAction from '../../redux/reducers/cart/cart.action';

import './cart-icon.styles.scss';

//Shopping Cart icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const CartIcon = ({toggleCartAction}) => (
    <div className='cart-icon'>
        <FontAwesomeIcon icon={faShoppingCart} className='shopping-icon' onClick={toggleCartAction}/>
        <span className='item-count' onClick={toggleCartAction}>0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartAction: () => dispatch(toggleCartAction())
});

export default connect(
    null,
    mapDispatchToProps
)(CartIcon);


