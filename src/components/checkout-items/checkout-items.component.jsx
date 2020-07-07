import React from 'react';
import { connect } from 'react-redux';

import './checkout-items.styles.scss';

import {removeItem, addItem, reduceItem} from '../../redux/reducers/cart/cart.action';


const CheckoutItems = ({cartItem, removeItem, addItem, reduceItem}) => {
    return (
        <div className='checkout-items'>
            <div className='image-container'>
                <img src={cartItem.imageUrl} alt="item"/>
            </div>
            <span className='title'> {cartItem.title} </span>
            <span className='quantity'>
                <div className='arrow' onClick={() => reduceItem(cartItem)}>&#10094;</div>
                    <span className='value'> {cartItem.quantity} </span>
                 <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div> 
            </span>
            <span className='price'> {cartItem.price} </span>
            <div className='remove-button' onClick={() => removeItem(cartItem)}>&#10005;</div>
            
        </div>
    )
};


const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item)),
    reduceItem: item => dispatch(reduceItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItems);