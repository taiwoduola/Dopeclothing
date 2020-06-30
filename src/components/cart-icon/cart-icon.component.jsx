import React from 'react';
import { connect } from 'react-redux';
import toggleCartAction from '../../redux/reducers/cart/cart.action';
import { selectCartItemsCount } from '../../redux/reducers/cart/cart.selector';
import './cart-icon.styles.scss';

//Shopping Cart icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const CartIcon = ({toggleCartAction, itemCount}) => (
    <div className='cart-icon'>
        <FontAwesomeIcon icon={faShoppingCart} className='shopping-icon' onClick={toggleCartAction}/>
        <span className='item-count' onClick={toggleCartAction}>{itemCount} </span>
    </div>
);

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
    toggleCartAction: () => dispatch(toggleCartAction())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);


