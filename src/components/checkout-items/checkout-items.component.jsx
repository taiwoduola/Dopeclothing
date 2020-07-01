import React from 'react';
import { connect } from 'react-redux';

import './checkout-items.styles.scss';

import {removeItem} from '../../redux/reducers/cart/cart.action';


const CheckoutItems = ({cartItem, removeItem}) => {
    return (
        <div className='checkout-items'>
            <div className='image-container'>
                <img src={cartItem.imageUrl} alt="item"/>
            </div>
            <span className='title'> {cartItem.title} </span>
            <span className='quantity'> {cartItem.quantity} </span>
            <span className='price'> {cartItem.price} </span>
            <div className='remove-button' onClick={() => removeItem(cartItem)}>&#10005;</div>
            
        </div>
    )
};


const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItems);